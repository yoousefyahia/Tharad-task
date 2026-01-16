import { Input } from "@/components/ui/input";
import { AiOutlineCheck } from "react-icons/ai"; 
import "./FiltersBar.css";

export default function FiltersBar({ filter }) {

  return (
    <div className="filters-bar-container">

      <Input
        placeholder="Search..."
        value={filter.search}
        onChange={e => filter.setSearch(e.target.value)}
        className="search-input"
        style={{ width: '160px' }}
      />

      <select
        value={filter.genre}
        onChange={(e) => filter.setGenre(e.target.value)}
        className="genre-select"
      >
        {filter.allGenres.map(g =>
          <option key={g} value={g} className="genre-option">
            {g === "all" ? "All Genres" : g}
          </option>
        )}
      </select>

      <div 
        className="theater-filter-wrapper" 
        onClick={() => filter.setOnly(!filter.onlyTheaters)}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
      >
        <div className={`theater-toggle-icon ${filter.onlyTheaters ? 'active' : ''}`}>
          {filter.onlyTheaters && <AiOutlineCheck size={16} color="white" />}
        </div>
        <span className="theater-label">In theaters</span>
      </div>

    </div>
  );
}
