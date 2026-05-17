import React, { createContext, useContext, useState } from 'react';
import { SiteContent, defaultContent } from '../data/defaultContent';

const STORAGE_KEY = 'yy_site_content';

interface ContentContextValue {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextValue>({
  content: defaultContent,
  updateContent: () => {},
  resetContent: () => {},
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return { ...defaultContent, ...JSON.parse(stored) };
    } catch {}
    return defaultContent;
  });

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => useContext(ContentContext);
