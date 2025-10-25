import React from 'react'
import styles from "./Scrollsection.module.css"
const Scrollsection = ({data,title}) => {
  return (
          <div className={styles.scrollSection}>
              {data.map((item,index)=>{
                    return(
                    <div className={styles.movieContainer} key={index}> 
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