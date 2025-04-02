
import "./GalleryFilters.css";

interface GalleryFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const GalleryFilters = ({
  filters,
  activeFilter,
  onFilterChange,
}: GalleryFiltersProps) => {
  return (
    <div className="filters-container">
      <div className="gallery-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? "active" : ""}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilters;
