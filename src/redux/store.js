import { configureStore } from "@reduxjs/toolkit";
import favoriteMoviesReducer from "./reducers/favoriteMoviesSlice";
import popularMoviesReducer from "./reducers/popularMoviesSlice";
import topRatedMoviesReducer from "./reducers/topRatedMoviesSlice";
import latestMoviesReducer from "./reducers/latestMoviesSlice";
import searchResultsReducer from "./reducers/searchResultsSlice";
import singleMovieReducer from "./reducers/singleMovieSlice";
import actorMoviesReducer from "./reducers/actorMoviesSlice";


const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    latestMovies: latestMoviesReducer,
    searchResults: searchResultsReducer,
    singleMovie: singleMovieReducer,
    actorMovies: actorMoviesReducer,
  },
});

export default store;



