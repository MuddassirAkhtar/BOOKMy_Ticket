import { createSlice } from "@reduxjs/toolkit";

const initialState = {
          booking :[],
}

const bookingSlice = createSlice({
name:"booking",
initialState,
reducers:{
          loadbooking:(state,action) => {
                    state.booking = action.payload;
          }
},
})

export default bookingSlice.reducer
export const {action } = bookingSlice.actions
