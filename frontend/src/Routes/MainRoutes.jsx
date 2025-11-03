import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import Movie from "../pages/movie/Movie";
import Event from "../pages/events/Event";
import Sports from "../pages/sports/Sports";
import UserProfile from "../components/UserProfile/UserProfile";
import YourShows from "../components/YourShows/YourShows";
import Tickets from "../components/Tickets/Tickets";

import { useSelector } from "react-redux";
const MainRoutes = () => {
  const { user, isLoggedIn } = useSelector((state) => state.authReducer);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/events" element={<Event />} />
        <Route path="/sports" element={<Sports />} />
        { isLoggedIn && (
           <>
            <Route path="/yourShow" element={<YourShows />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/tickets" element={<Tickets />} />
          </>
        )
         
        }
      </Routes>
    </div>
  );
};

export default MainRoutes;
