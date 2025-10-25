import {createSlice} from "@reduxjs/toolkit"

 const initialState = {
sports :[],
 }

 const sportsSlice = createSlice({
          name:"sports",
          initialState,
          reducers:{
                    loadsports : (state,action) =>{
                              state.sports=action.payload
                    }
          }
 }) 

 export default sportsSlice.reducer
 export const {loadsports } = sportsSlice.actions