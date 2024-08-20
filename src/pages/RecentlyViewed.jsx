import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(storedMovies);

    // Рассчитать количество карточек, которые можно показать на странице
    const calculateItemsPerPage = () => {
      const screenWidth = window.innerWidth;
      // Зависимость от ширины экрана (примерная логика)
      if (screenWidth > 1200) {
        setItemsPerPage(10);
      } else if (screenWidth > 768) {
        setItemsPerPage(7);
      } else {
        setItemsPerPage(5);
      }
    };

    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);

    // Удалить обработчик событий при размонтировании компонента
    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(recentlyViewed.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedMovies = recentlyViewed.slice(startIndex, startIndex + itemsPerPage);

  if (recentlyViewed.length === 0) {
    return (
      <div className="text-white p-6">
        <h1 className="text-3xl font-bold">Recently Viewed</h1>
        <p>No movies viewed recently.</p>
      </div>
    );
  }

  return (
<div className="text-white p-6">
  <h1 className="text-3xl font-bold mb-4">Recently Viewed Movies</h1>
  
  <div className="flex flex-wrap justify-center space-x-4 space-y-4">
    {displayedMovies.map((movie) => (
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className="bg-cCard rounded-lg p-3 shadow-lg inline-block w-[160px] h-[320px]"> {/* Увеличиваем высоту карточки */}
          <img 
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : 'https://via.placeholder.com/185x278?text=No+Image'}
            alt={movie.title}
            className="w-full h-[220px] object-cover rounded-lg mb-2"  /* Устанавливаем высоту изображения */
          />
          <h3 className="text-sm font-semibold text-center overflow-hidden text-ellipsis">{movie.title}</h3>
        </div>
      </Link>
    ))}
  </div>

  {/* Пагинация */}
  {totalPages > 1 && (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`w-8 h-8 rounded-full border-2 ${currentPage === i + 1 ? 'bg-cYellow' : 'bg-cBlue'} text-white`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )}
</div>
  );
};

export default RecentlyViewed;
