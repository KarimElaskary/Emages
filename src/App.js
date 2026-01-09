import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("marvel");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const performSearch = async (term, pageNum) => {
    setLoading(true);
    const { results, totalPages: total } = await searchImages(term, pageNum);
    setImages(results);
    setTotalPages(total);
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (term) => {
    setSearchTerm(term);
    setPage(1);
    performSearch(term, 1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    performSearch(searchTerm, newPage);
  };

  useEffect(() => {
    performSearch(searchTerm, page);
  }, []);

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', fontSize: '1.5rem', color: 'var(--text-muted)' }}>
          Loading amazing images...
        </div>
      ) : (
        <>
          <ImageList images={images} />
          {images.length > 0 && (
            <Pagination 
              currentPage={page} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
