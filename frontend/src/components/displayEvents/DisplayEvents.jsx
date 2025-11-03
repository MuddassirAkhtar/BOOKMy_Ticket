import React from 'react'
import styles from "./displayEvents.module.css"
import { IoIosStar } from "react-icons/io";


const DisplayEvents = ({title ,data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.filterSection}>
        <h3>Filters</h3>
        <div>
          <div></div>
          <div></div>
        </div>
        </div>
      <div className={styles.eventContainer}>
        <h1>{title} in CITY</h1>
        <div className={styles.event}>
          {data.map((events,index)=>(
            <div key={index} className={styles.card}>
              <div className={styles.imgCnt}><img src={events.poster} alt="" />
              <div className={styles.rating}> {events.rating ? <><IoIosStar /> {events.rating}</> : <>{events.date}</>}</div>
              </div>
              <div className={styles.info}>
                 <h1>{events.title}</h1>
                 <div className={styles.detail}>
                  
                 {events.language && events.price ? (<>
                 <span>{`Language:${events.language}`}</span> 
                 <span>{`Price:${events.price}`}</span></>) : (
                  <span>{`Venue: ${events.venue}`}</span>
                 )}
                 </div>
              </div>
                </div>
          ))}
           
         
        </div>
      </div>
    </div>
  )
}

export default DisplayEvents