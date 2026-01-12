import axios from "../../api/axiosconfig";
import {loadreviews} from "../reducer/reviewsSlice"

export const asyncLoadReviews = ()=>async(dispatch,getstate)=>{
          try{
          const {data} = await axios.get("/reviews")
          dispatch(loadreviews(data))
          }catch (err) {
           console.log(err);
          }
} 