import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useMovieStore } from "../store/movieStore";
import DeleteDialog from "./DeleteDialog";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const { rate, setEditing, remove } = useMovieStore();
  const [open, setOpen] = useState(false);

  const stars = Array(5).fill(0).map((_, i) => i < movie.rating);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      style={{ height: "100%" }}
    >
      <div className="card-container">

        {/* Image Section */}
        <div className="image-wrapper">
          <img src={movie.image} alt={movie.name} className="movie-image" />

          {/* Yellow Star Badge */}
          {movie.rating > 0 && (
            <div className="star-badge">
              <AiFillStar size={30} color="#facc15" />
              <span className="rating-text">{movie.rating}</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="content-section">
          <div>
            <h3 className="movie-title">{movie.name}</h3>

            <div className="genres-wrapper">
              {movie.genres && movie.genres.map(g => (
                <span key={g} className="genre-badge">{g}</span>
              ))}
            </div>

            <p className="movie-description">
              {movie.description || "No description available."}
            </p>
          </div>

          <div className="footer-section">

            {/* Rating Stars */}
            <div className="rating-stars-wrapper">
              <span className="rating-label">Rating: ({movie.rating}/5)</span>
              <div className="stars-row">
                {stars.map((filled, i) => (
                  <span
                    key={i}
                    onClick={() => rate(movie, i + 1)}
                    className="star-clickable"
                  >
                    {filled ? (
                      <AiFillStar size={20} color="#facc15" />
                    ) : (
                      <AiOutlineStar size={20} color="#d1d5db" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="actions-wrapper">
              <button
                onClick={() => setEditing(movie)}
                className="icon-btn"
                title="Edit"
              >
                <AiOutlineEdit size={18} />
              </button>

              <button
                onClick={() => setOpen(true)}
                className="icon-btn"
                title="Delete"
              >
                <AiOutlineDelete size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <DeleteDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          remove(movie.id);
          setOpen(false);
        }}
      />
    </motion.div>
  );
}
