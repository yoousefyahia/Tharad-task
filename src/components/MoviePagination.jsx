import { motion } from "framer-motion";
import "./MoviePagination.css";

export default function MoviePagination({ filter }) {

  const { page, setPage, pages } = filter;

  if (pages <= 1) return null;

  const prev = () => {
    if (page > 1) setPage(page - 1);
  };

  const next = () => {
    if (page < pages) setPage(page + 1);
  };

  return (
    <motion.div
      className="pagination-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button
        className="pagination-btn"
        onClick={prev}
        disabled={page === 1}
      >
        Previous
      </button>

      <span className="page-info">
        Page <span className="page-number">{page}</span> of <span className="page-number">{pages}</span>
      </span>

      <button
        className="pagination-btn"
        onClick={next}
        disabled={page === pages}
      >
        Next
      </button>
    </motion.div>
  );
}
