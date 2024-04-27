import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

export const SidebarContext = createContext<any>(null);

const SidebarContextProvider = ({ children }: PropsWithChildren) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    const expanded = localStorage.getItem('expandedSidebar');

    return expanded ? expanded === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('expandedSidebar', String(isExpanded))
  }, [isExpanded]);

  return (
    <SidebarContext.Provider value={{ setIsExpanded: setIsExpanded, isExpanded: isExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);

export default SidebarContextProvider;
