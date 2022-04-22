import { StatusFilters } from '../filters/filtersSlice';

function StatusFilter({ value: status, onChange }) {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);
    const className = value === status ? 'selected' : '';

    return (
      <button className={`ui button filters-btn ${className}`} key={value} onClick={handleClick}>
        {key}
      </button>
    );
  });

  return (
    <div className="filters statusFilters">
      <div className="filters-hdr">Filter by Status</div>
      <div className="filters-btns">
        {renderedFilters}
      </div>
    </div>
  );
}

export default StatusFilter;