import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import Movie from "../pages/movie/Movie";
import Event from "../pages/events/Event";
import Sports from "../pages/sports/Sports";
import UserProfile from "../components/UserProfile/UserProfile";
import YourShows from "../components/YourShows/YourShows";
import Tickets from "../components/Tickets/Tickets";
import EventInfo from "../pages/events/EventInfo";
import Bookings from  "../pages/Bookings/Booking"
import Form from "../components/YourShows/Form"


import { ROUTES } from "../route";

import { useSelector } from "react-redux";
import Dashbord from "../pages/Dashbord/Dashbord";
import BookingHistory from "../pages/BookingHistory/BookingHistory";
import Wishlist from "../pages/Wishlist/Wishlist";
import Payment from "../pages/Payment/Payment";
import Profile from "../pages/profile/Profile"
import Settings from "../pages/Settings/Settings";
const MainRoutes = () => {
  const { user, isLoggedIn } = useSelector((state) => state.authReducer);

  return (
    <div>
     <Routes>
  <Route path={ROUTES.HOME} element={<Home />} />
  <Route path={ROUTES.MOVIE} element={<Movie />} />
  <Route path={ROUTES.EVENTS} element={<Event />} />
  <Route path={ROUTES.SPORTS} element={<Sports />} />

  {isLoggedIn && (
    <>
      <Route path={ROUTES.YOUR_SHOWS} element={<YourShows />} />
      <Route path={ROUTES.PROFILE} element={<UserProfile />} > 
      
    <Route path="dashboard" element={<Dashbord />} />
    <Route path="profile" element={<Profile />} />
    <Route path="bookings" element={<BookingHistory />} />
    <Route path="wishlist" element={<Wishlist />} />
    <Route path="payments" element={<Payment />} />
    <Route path="settings" element={<Settings />} />
      
      </Route>
      
      <Route path={ROUTES.TICKETS} element={<Tickets />} />
      <Route path={ROUTES.FORM}  element={<Form/>}/>
      <Route path={ROUTES.EVENT_INFO} element={<EventInfo />} /> 
      
      <Route path={ROUTES.BOOKINGS} element={<Bookings/>} />
    </>
  )}
</Routes>
    </div>
  );
};

export default MainRoutes;
