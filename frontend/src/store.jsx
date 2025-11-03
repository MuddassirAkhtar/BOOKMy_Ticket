import {configureStore} from "@reduxjs/toolkit"  // it creates a store 
import movieSlice from   "./store/reducer/movieSlice"
import theaterSlice from "./store/reducer/theaterSlice"
import bookingSlice from "./store/reducer/bookingSlice"
import sportsSlice from "./store/reducer/sportsSlice"
import eventSlice from "./store/reducer/eventsSlice"
import authSlice from "./store/reducer/authSlice"
export const store = configureStore({
          reducer :{
                    movieReducer: movieSlice,
                    theaterReducer: theaterSlice,
                    bookingReducer:bookingSlice,
                    sportsReducer:sportsSlice,
                    eventReducer:eventSlice,
                    authReducer:authSlice,
          }
});

export default store

