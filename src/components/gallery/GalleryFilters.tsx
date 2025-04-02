
import { useState, useEffect } from 'react';
import './GalleryFilters.css';

interface GalleryFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const GalleryFilters = ({ filters, activeFilter, onFilterChange }: GalleryFiltersProps) => {
  const [filtersRef, setFiltersRef] = useState<HTMLDivElement | null>(null);
  
  // Scroll active filter into view when it changes
  useEffect(() => {
    if (filtersRef) {
      const activeFilterIndex = filters.indexOf(activeFilter);
      if (activeFilterIndex >= 0) {
        const activeFilterElement = filtersRef.children[activeFilterIndex] as HTMLElement;
        if (activeFilterElement) {
          const containerLeft = filtersRef.scrollLeft;
          const containerWidth = filtersRef.offsetWidth;
          const filterLeft = activeFilterElement.offsetLeft;
          const filterWidth = activeFilterElement.offsetWidth;
          
          // Calculate the scroll position to center the active filter
          const scrollPosition = filterLeft - (containerWidth / 2) + (filterWidth / 2);
          filtersRef.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
      }
    }
  }, [activeFilter, filters, filtersRef]);

  return (
    <div className="gallery-filters" ref={setFiltersRef}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`gallery-filter-button ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;
