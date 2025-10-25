import axios from "../../api/axiosconfig";
import {loadevent} from "../reducer/eventsSlice"

export const asyncLoadEvent = ()=>async(dispatch,getstate)=>{
          try{
          const {data} = await axios.get("/events")
          console.log(data)
          dispatch(loadevent(data))
          }catch (err) {
           console.log(err);
          }
}