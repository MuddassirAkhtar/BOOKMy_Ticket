import {createSlice} from "@reduxjs/toolkit"

 const initialState = {
event :[],
 }

 const eventSlice = createSlice({
          name:"event",
          initialState,
          reducers:{
                    loadevent : (state,action) =>{
                              state.event=action.payload
                    }
          }
 }) 

 export default eventSlice.reducer
 export const { loadevent } = eventSlice.actions