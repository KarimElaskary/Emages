import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <button 
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &larr; Previous
      </button>
      
      <div className="page-info">
        Page <span className="current-page">{currentPage}</span> of {totalPages}
      </div>

      <button 
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next &rarr;
      </button>
    </div>
  );
}

export default Pagination;
