import axios from "../../api/axiosConfig";
import {loadtheater} from "../reducer/theaterSlice"


export const asyncLoadTheater =()=>async(dispatch)=>{

          try{
                    const {data} = await axios.get("/theaters")
                    console.log(data)
                    dispatch(loadtheater(data))

          }
          catch(err){
                    console.log(err)
          }
          }

