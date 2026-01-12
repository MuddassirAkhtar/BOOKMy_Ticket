import axios from "../../api/axiosconfig";
import { loaduser } from "../reducer/authSlice";
import { loginSuccess } from "../reducer/authSlice"; 
import {logout} from "../reducer/authSlice"
export const asyncloadUsers = () => async (dispatch, state) => {
  try {
    const { data } = await axios.get("/users");
    //  console.log(data[0])
  } catch (err) {
    console.log(err);
  }
};

export const asyncAddUsers = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/users", user);
    dispatch(loaduser(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const asyncLoginUser = (user) => async (dispatch, state) => {
  try {
    const {data} = await axios.get(
      `/users?email=${user.email}&password=${user.password}`,
      user
    );

    if(data.length >0 ){
localStorage.setItem("user", JSON.stringify(data[0]));
const loggedInUser = data[0];
  dispatch(loginSuccess(loggedInUser));
    }else{
      console.log("user not registered ")
    }
    
  } catch (err) {
    console.log(err);
  }
};

export  const asyncAutoLoginUser = () => async (dispatch) =>{
  const user = JSON.parse(localStorage.getItem("user"))
  if(user){
    dispatch(asyncLoginUser(user));
  }
}
export const asyncLogOutUser = () => async (dispatch,state) =>{
  try{

    localStorage.removeItem("user")
    dispatch(logout())

  }catch(err){

    console.log(err)

  }
}