import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails, fetchMovieCredits, fetchMovieRecommendations, fetchMovieTrailer } from "../redux/reducers/singleMovieSlice";
import CategoryLoading from "../components/Loading/CategoryLoading";
import { useParams, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

const SingleMovie = () => {
  const { movieId } = useParams(); // Достаем movieId из параметров маршрута
  const dispatch = useDispatch();

  const { movieDetails, credits, recommendations, trailerKey, isLoading } = useSelector((state) => state.singleMovie);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
    dispatch(fetchMovieCredits(movieId));
    dispatch(fetchMovieRecommendations(movieId));
    dispatch(fetchMovieTrailer(movieId)); // Загружаем трейлер
  }, [dispatch, movieId]);

  useEffect(() => {
    if (movieDetails) {
      const storedMovies = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      
      // Проверка на дубликаты
      const isMovieAlreadyViewed = storedMovies.some((movie) => movie.id === movieDetails.id);
      
      if (!isMovieAlreadyViewed) {
        const updatedMovies = [movieDetails, ...storedMovies].slice(0, 10); // Ограничение до 10 фильмов
        localStorage.setItem("recentlyViewed", JSON.stringify(updatedMovies));
      }
    }
  }, [movieDetails]);

  if (isLoading) return <CategoryLoading />;

  if (!movieDetails) return <div>No movie details available.</div>;

  return (
    <>
      <Header />
      <div className="text-white p-6 space-y-8">
        {/* Movie Details Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <img
            src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
            alt={movieDetails.title}
            className="w-full md:w-1/4 lg:w-1/5 rounded-lg shadow-lg" // Изменение размеров постера
          />
          <div className="flex flex-col space-y-4 md:space-y-6">
            <h1 className="text-4xl font-bold">{movieDetails.title}</h1>
            <p className="text-lg">{movieDetails.overview}</p>
            <div className="flex space-x-4">
              <span className="font-semibold">Release Date: {movieDetails.release_date}</span>
              <span className="font-semibold">Rating: {movieDetails.vote_average.toFixed(1)}</span>
            </div>

            {/* Трейлер */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Trailer</h2>
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-56 md:w-96 md:h-64 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Actors Carousel */}
        <h2 className="text-3xl font-bold mb-4">Actors</h2>
        <Carousel>
          {credits.map((actor) => (
            <Link to={`/actor/${actor.id}`} key={actor.id}>
              <div className="bg-cCard rounded-lg p-3 shadow-lg inline-block w-40">
                <img
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : 'https://via.placeholder.com/185x278?text=No+Image'}
                  alt={actor.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-sm font-semibold text-center">{actor.name}</h3>
              </div>
            </Link>
          ))}
        </Carousel>

        {/* Recommendations Carousel */}
        <h2 className="text-3xl font-bold mb-4">Recommended Movies</h2>
        <Carousel>
          {recommendations.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="bg-cCard rounded-lg p-3 shadow-lg inline-block w-40">
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : 'https://via.placeholder.com/185x278?text=No+Image'}
                  alt={movie.title}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-sm font-semibold text-center">{movie.title}</h3>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default SingleMovie;
