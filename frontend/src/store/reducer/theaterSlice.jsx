import { createSlice } from "@reduxjs/toolkit";  // it creates a slice 

const initialState = {
          theater : [],    // initializing the slice with null it is done outside 
}

const theaterSlice = createSlice({      
name:"theater",  
initialState,
reducers:{
          loadtheater:(state,action)=>{
                    state.theater = action.payload;
          }
},
})

export default theaterSlice.reducer
export const {action } = theaterSlice.actions
