
import { useState, useEffect } from 'react';
import './ApplicationTabs.css';

interface ApplicationTabsProps {
  activeTab: number;
  onChange: (index: number) => void;
  tabs: string[];
}

const ApplicationTabs = ({ activeTab, onChange, tabs }: ApplicationTabsProps) => {
  const [tabsRef, setTabsRef] = useState<HTMLDivElement | null>(null);
  
  // Scroll active tab into view when it changes
  useEffect(() => {
    if (tabsRef) {
      const activeTabElement = tabsRef.children[activeTab] as HTMLElement;
      if (activeTabElement) {
        const containerLeft = tabsRef.scrollLeft;
        const containerWidth = tabsRef.offsetWidth;
        const tabLeft = activeTabElement.offsetLeft;
        const tabWidth = activeTabElement.offsetWidth;
        
        // Calculate the scroll position to center the active tab
        const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        tabsRef.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  }, [activeTab, tabsRef]);

  return (
    <div className="application-tabs" ref={setTabsRef}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`application-tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => onChange(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default ApplicationTabs;
