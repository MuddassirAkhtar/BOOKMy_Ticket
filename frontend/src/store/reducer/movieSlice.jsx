import { createSlice } from "@reduxjs/toolkit";

const initialState = {
movie:[],
}

const movieSlice = createSlice({
name:"movie",
initialState,
reducers:{
          loadmovie:(state,action) =>{
                    state.movie = action.payload;
          }

}
})

export default  movieSlice.reducer
export const {action} = movieSlice.actions