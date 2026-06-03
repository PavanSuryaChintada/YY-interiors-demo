import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, defaultContent } from '../data/defaultContent';

const STORAGE_KEY = 'yy_site_content';
const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID as string | undefined;

export type SyncStatus = 'idle' | 'loading' | 'synced' | 'error' | 'no-config';

interface ContentContextValue {
  content: SiteContent;
  syncStatus: SyncStatus;
  updateContent: (newContent: SiteContent) => Promise<{ ok: boolean; error?: string }>;
  resetContent: () => Promise<{ ok: boolean; error?: string }>;
  refreshFromCloud: () => Promise<void>;
}

const ContentContext = createContext<ContentContextValue>({
  content: defaultContent,
  syncStatus: 'idle',
  updateContent: async () => ({ ok: true }),
  resetContent: async () => ({ ok: true }),
  refreshFromCloud: async () => {},
});

async function fetchFromCloud(): Promise<SiteContent | null> {
  if (!BIN_ID) return null;
  try {
    const res = await fetch('/api/get-content');
    if (!res.ok) return null;
    const data = await res.json();
    return data.record ? ({ ...defaultContent, ...data.record } as SiteContent) : null;
  } catch {
    return null;
  }
}

async function pushToCloud(content: SiteContent): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/update-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });
    const data = await res.json();
    if (!res.ok) return { ok: false, error: data.error || `HTTP ${res.status}` };
    return { ok: true };
  } catch (e: unknown) {
    return { ok: false, error: e instanceof Error ? e.message : 'Network error' };
  }
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return { ...defaultContent, ...JSON.parse(stored) };
    } catch {}
    return defaultContent;
  });

  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');

  const refreshFromCloud = async () => {
    if (!BIN_ID) { setSyncStatus('no-config'); return; }
    setSyncStatus('loading');
    const remote = await fetchFromCloud();
    if (remote) {
      setContent(remote);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(remote));
      setSyncStatus('synced');
    } else {
      setSyncStatus('error');
    }
  };

  useEffect(() => { refreshFromCloud(); }, []); // eslint-disable-line

  const updateContent = async (newContent: SiteContent): Promise<{ ok: boolean; error?: string }> => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    if (!BIN_ID) return { ok: true };
    setSyncStatus('loading');
    const result = await pushToCloud(newContent);
    setSyncStatus(result.ok ? 'synced' : 'error');
    return result;
  };

  const resetContent = async (): Promise<{ ok: boolean; error?: string }> => {
    setContent(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
    if (!BIN_ID) return { ok: true };
    setSyncStatus('loading');
    const result = await pushToCloud(defaultContent);
    setSyncStatus(result.ok ? 'synced' : 'error');
    return result;
  };

  return (
    <ContentContext.Provider value={{ content, syncStatus, updateContent, resetContent, refreshFromCloud }}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => useContext(ContentContext);
