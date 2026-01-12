import {createSlice} from "@reduxjs/toolkit"

 const initialState = {
reviews :[],
 }

 const reviewsSlice = createSlice({
          name:"reviews",
          initialState,
          reducers:{
                    loadreviews : (state,action) =>{
                              state.reviews=action.payload
                    }
          }
 }) 

 export default reviewsSlice.reducer
 export const {loadreviews } = reviewsSlice.actions