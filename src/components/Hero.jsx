import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { fetchPopular } from "../redux/reducers/popularMoviesSlice";
import { useSelector, useDispatch } from "react-redux";
import HeroLoading from "./Loading/HeroLoading";

//icons
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state) => state.popularMovies);
  const { isLoading } = useSelector((state) => state.popularMovies);

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const randomPopular =
    popularMovies[Math.floor(Math.random() * popularMovies.length)];

  if (isLoading) return <HeroLoading />;

  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Navbar />
      <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-r from-cCard via-cCard/80 to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${randomPopular?.backdrop_path}`}
          alt={randomPopular?.title || "Hero"}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 text-white flex flex-col justify-center items-start h-full gap-4 px-6 md:px-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {randomPopular?.title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg bg-cCard/70 p-2 rounded">
            {randomPopular?.overview}
          </p>
          <Link to={`movie/${randomPopular?.id}`}>
            <button className="bg-cRose py-2 px-4 rounded hover:bg-cRose/80 flex items-center gap-2">
              Details
              <BiLinkExternal />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
