import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
isAuthModelOpen : false,
activeAuthTab:"login",
isLoggedIn:false,
user:[],

}

const authSlice = createSlice({
name:"auth",
initialState,
reducers:{
openAuthModel:(state,action)=>{
          state.isAuthModelOpen= true;
},
closeAuthModel:(state,action)=>{
          state.isAuthModelOpen= false;
},
loginSuccess :(state,action)=>{
          state.isLoggedIn = true;
          state.user = action.payload;
          state.isAuthModelOpen = false; // close popup after login
},
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    loaduser:(state,action)=>{
          state.user = action.payload;

    }
}
})

export const { openAuthModel, closeAuthModel, loginSuccess, logout,loaduser } =
  authSlice.actions;

export default authSlice.reducer;