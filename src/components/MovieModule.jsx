import { motion } from "framer-motion";

import { useMovieStore } from "../store/movieStore";
import useMovieFilters from "../hooks/useMovieFilters";

import FiltersBar from "./FiltersBar";
import MovieCard from "./MovieCard";
import MoviePagination from "./MoviePagination";
import MovieForm from "./MovieForm";
import "./MovieModule.css";

export default function MovieModule(){

  const { movies, removeAllRatings, setEditing } = useMovieStore();
  const filter = useMovieFilters(movies);

  const avgRating = movies.length 
    ? (movies.reduce((acc, m) => acc + (m.rating || 0), 0) / movies.length).toFixed(1)
    : 0;

  return (
    <motion.div
      className="movie-module-container"
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
    >

      {/* Header Stats & Actions */}
      <div className="module-header">
        <div className="stats-container">
          <span className="stat-label">Total Movies: {movies.length}</span>
          <span className="stat-divider">/</span>
          <span className="stat-label">Average Rating: {avgRating}</span>
        </div>

        <div className="actions-container">
          <button 
            onClick={removeAllRatings}
            className="action-button"
          >
            Remove Ratings
          </button>
          
          <button 
            onClick={() => setEditing({})}
            className="action-button"
          >
            Add Movie
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filters-wrapper">
        <FiltersBar filter={filter}/>
      </div>

      {/* Movies Grid */}
      <div className="movies-grid-container">
        {filter.shown.map(m=>
          <MovieCard key={m.id} movie={m}/>
        )}
      </div>

      <MoviePagination filter={filter}/>
      <MovieForm />
    </motion.div>
  );
}
