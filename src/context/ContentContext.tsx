import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, defaultContent } from '../data/defaultContent';

const STORAGE_KEY = 'yy_site_content';
const CACHE_TIMESTAMP_KEY = 'yy_content_cached_at';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
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

function isCacheValid(): boolean {
  try {
    const ts = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (!ts) return false;
    return Date.now() - parseInt(ts, 10) < CACHE_TTL_MS;
  } catch {
    return false;
  }
}

function stampCache() {
  try {
    localStorage.setItem(CACHE_TIMESTAMP_KEY, String(Date.now()));
  } catch {}
}

function invalidateCache() {
  try {
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
  } catch {}
}

async function fetchFromCloud(): Promise<SiteContent | null> {
  if (!BIN_ID) return null;
  try {
    const res = await fetch('/api/get-content');
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.record) return null;

    const record = data.record;

    // Deep-merge projects so new fields (slug, mainImage, etc.) fill in from defaults
    const mergedProjects = (record.projects || defaultContent.projects).map((p: Record<string, unknown>) => {
      const defaultProject = defaultContent.projects.find((dp) => dp.id === p.id) || {};
      return { ...defaultProject, ...p };
    });

    return { ...defaultContent, ...record, projects: mergedProjects } as SiteContent;
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
      if (stored) {
        const parsed = JSON.parse(stored);
        const mergedProjects = (parsed.projects || defaultContent.projects).map((p: Record<string, unknown>) => {
          const defaultProject = defaultContent.projects.find((dp) => dp.id === p.id) || {};
          return { ...defaultProject, ...p };
        });
        return { ...defaultContent, ...parsed, projects: mergedProjects };
      }
    } catch {}
    return defaultContent;
  });

  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');

  // Force-fetch from cloud, ignoring cache (used by admin after saves)
  const refreshFromCloud = async () => {
    if (!BIN_ID) { setSyncStatus('no-config'); return; }
    setSyncStatus('loading');
    const remote = await fetchFromCloud();
    if (remote) {
      setContent(remote);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(remote));
      stampCache();
      setSyncStatus('synced');
    } else {
      setSyncStatus('error');
    }
  };

  // On mount: only fetch from cloud if cache is stale
  useEffect(() => {
    if (!BIN_ID) { setSyncStatus('no-config'); return; }
    if (isCacheValid()) {
      // Cache still fresh — serve from localStorage, no request needed
      setSyncStatus('synced');
      return;
    }
    refreshFromCloud();
  }, []); // eslint-disable-line

  const updateContent = async (newContent: SiteContent): Promise<{ ok: boolean; error?: string }> => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    if (!BIN_ID) return { ok: true };
    setSyncStatus('loading');
    const result = await pushToCloud(newContent);
    if (result.ok) {
      stampCache(); // Fresh save = reset the 10-min window
    }
    setSyncStatus(result.ok ? 'synced' : 'error');
    return result;
  };

  const resetContent = async (): Promise<{ ok: boolean; error?: string }> => {
    setContent(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
    invalidateCache();
    if (!BIN_ID) return { ok: true };
    setSyncStatus('loading');
    const result = await pushToCloud(defaultContent);
    if (result.ok) stampCache();
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
