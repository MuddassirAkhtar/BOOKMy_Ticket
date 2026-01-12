import React from 'react'
import styles from "./Scrollsection.module.css"
import { useNavigate } from "react-router";
const Scrollsection = ({data,title}) => {
  const navigate = useNavigate(); 
  return (
          <div className={styles.scrollSection}>
              {data.map((item,index)=>{
                    return(
                    <div className={styles.movieContainer} key={index} onClick={() => navigate(`/event/${title}/${item.id}`)} > 
                              <div className={styles.poster}>
                                        <img src={item.poster} alt="" />
                                        
                                        
                              </div>
                              <div className={styles.description}>
                                        <h3>{item.title }</h3>
                                        <span >{item.genre}</span>
                                        <span>{item.venue}</span>
                              </div> 
                              
                     </div>
                    )
              })}
          </div>
  )
}

export default Scrollsection