import axios from "../../api/axiosconfig";
import {loadmovie} from "../reducer/movieSlice"

export const asyncLoadMovie = ()=>async(dispatch,getstate)=>{
          try{
          const {data} = await axios.get("/movies")
          console.log(data)
          dispatch(loadmovie(data))
          }catch (err) {
           console.log(err);
          }
}