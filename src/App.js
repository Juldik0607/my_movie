import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Redux
import store from "./redux/store"; // Правильный импорт store
import { Provider } from "react-redux"; // Именованный импорт Provider

// Import components
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";
import Search from "./pages/Search";
import ActorMovies from "./pages/ActorMovies";
import RecentlyViewed from "./pages/RecentlyViewed"; 

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// React Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route basename="/my_movie"></Route>
      <Route index element={<Home />} />
      <Route path="/movie/:movieId" element={<SingleMovie />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/actor/:actorId" element={<ActorMovies />} />
      <Route path="*" element={<Error />} />
      <Route path="/recent-movies" element={<RecentlyViewed />} />
    </Route>
  )
);

const App = () => {
  return (
    <Provider store={store}> {/* Используем именованный импорт */}
      <div className="bg-cBlue min-h-screen">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App;
