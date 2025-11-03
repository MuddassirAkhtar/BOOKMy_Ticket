import axios from "../../api/axiosconfig";
import {loadsports} from "../reducer/sportsSlice"

export const asyncLoadSports = ()=>async(dispatch,getstate)=>{
          try{
          const {data} = await axios.get("/sports")
          dispatch(loadsports(data))
          }catch (err) {
           console.log(err);
          }
}