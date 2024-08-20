import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchActorDetails, fetchActorMovies } from "../redux/reducers/actorMoviesSlice";
import { useParams, Link } from "react-router-dom";

import Carousel from "../components/Carousel";
import Header from "../components/Header";

const ActorMovies = () => {
  const { actorId } = useParams();
  const dispatch = useDispatch();

  const { actorDetails, actorMovies, isLoading } = useSelector((state) => state.actorMovies);

  useEffect(() => {
    dispatch(fetchActorDetails(actorId));
    dispatch(fetchActorMovies(actorId));
  }, [dispatch, actorId]);

  

  if (!actorDetails) return <div>No actor details available.</div>;

  return (
    <>
      <Header />
      <div className="text-white px-6 sm:px-12 md:px-20 lg:px-28 mt-8">
        {/* Actor Details Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <img
            src={actorDetails.profile_path ? `https://image.tmdb.org/t/p/w500${actorDetails.profile_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
            alt={actorDetails.name}
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="flex flex-col space-y-4 md:space-y-6 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold">{actorDetails.name}</h1>
            <p className="text-lg">{actorDetails.biography}</p>
            <div className="flex space-x-4">
              <span className="font-semibold">Birthday: {actorDetails.birthday}</span>
              {actorDetails.deathday && <span className="font-semibold">Deathday: {actorDetails.deathday}</span>}
              <span className="font-semibold">Place of Birth: {actorDetails.place_of_birth}</span>
            </div>
          </div>
        </div>

        {/* Movies Carousel */}
        <h2 className="text-3xl font-bold my-6">Movies Featuring {actorDetails.name}</h2>
        <Carousel>
          {actorMovies.map((movie) => (
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

export default ActorMovies;
