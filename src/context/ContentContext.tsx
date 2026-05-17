import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, defaultContent } from '../data/defaultContent';

const STORAGE_KEY = 'yy_site_content';
export const JSONBIN_ID_KEY = 'yy_jsonbin_bin_id';
export const JSONBIN_MASTER_KEY = 'yy_jsonbin_master_key';

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

async function fetchFromJsonbin(binId: string, masterKey: string): Promise<SiteContent | null> {
  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: { 'X-Master-Key': masterKey },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.record ? ({ ...defaultContent, ...data.record } as SiteContent) : null;
  } catch {
    return null;
  }
}

async function pushToJsonbin(
  binId: string,
  masterKey: string,
  content: SiteContent
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': masterKey,
      },
      body: JSON.stringify(content),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { ok: false, error: body.message || `HTTP ${res.status}` };
    }
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

  const getBinConfig = () => ({
    binId: localStorage.getItem(JSONBIN_ID_KEY) || '',
    masterKey: localStorage.getItem(JSONBIN_MASTER_KEY) || '',
  });

  // On mount: pull latest from cloud if configured
  const refreshFromCloud = async () => {
    const { binId, masterKey } = getBinConfig();
    if (!binId || !masterKey) { setSyncStatus('no-config'); return; }

    setSyncStatus('loading');
    const remote = await fetchFromJsonbin(binId, masterKey);
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

    const { binId, masterKey } = getBinConfig();
    if (!binId || !masterKey) return { ok: true }; // local-only save

    setSyncStatus('loading');
    const result = await pushToJsonbin(binId, masterKey, newContent);
    setSyncStatus(result.ok ? 'synced' : 'error');
    return result;
  };

  const resetContent = async (): Promise<{ ok: boolean; error?: string }> => {
    setContent(defaultContent);
    localStorage.removeItem(STORAGE_KEY);

    const { binId, masterKey } = getBinConfig();
    if (!binId || !masterKey) return { ok: true };

    setSyncStatus('loading');
    const result = await pushToJsonbin(binId, masterKey, defaultContent);
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
