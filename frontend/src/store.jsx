import {configureStore} from "@reduxjs/toolkit"  // it creates a store 
import movieSlice from   "./store/reducer/movieSlice"
import theaterSlice from "./store/reducer/theaterSlice"
import bookingSlice from "./store/reducer/bookingSlice"
export const store = configureStore({
          reducer :{
                    movieReducer: movieSlice,
                    theaterReducer: theaterSlice,
                    bookingReducer:bookingSlice,
          }
});

export default store

