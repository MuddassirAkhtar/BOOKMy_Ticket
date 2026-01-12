import React from 'react'
import { useParams ,useNavigate } from "react-router";
import { useSelector } from "react-redux";
import styles from "./eventInfo.module.css"
import ReviewCard from '../../components/reviewCard/ReviewCard';
import { useState,useEffect } from 'react';
import axios from 'axios';

const EventInfo = () => {
  const { title, id  ,name} = useParams();
  const navigate = useNavigate();

           const movies =  useSelector((state)=> state.movieReducer.movie)
           const events =  useSelector((state)=> state.eventReducer.event)
           const sports =  useSelector((state)=> state.sportsReducer.sports)

           let data = null;

           if(title === "Movies"){
            data = movies.find((item) =>  String(item.id) === id);
           }else if (title === "Events"){
            data = events.find((item) =>  String(item.id) === id);
           }else if (title === "Sports"){
            data = sports.find((item) =>  String(item.id) === id);
           }



            const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

            

           
            
              // Api call for reviews 

const [Reviews , setReviews] = useState ([])
  useEffect(() => {
    const displayReviews = async()=>{
      try{const res = await axios.get("http://localhost:3000/reviews")
      setReviews(res.data)
    }catch(err){
      console.log(err)
    }
      
    }

    displayReviews();
  
    
  }, [])

  //  Filtering Reviews Based on ID 

  const filteredReviews = Reviews.filter(reviews => reviews.itemId == data.itemId);




{/* Booking handler */}

const handleBookings = ()=>{
navigate(`/event/${title}/${id}/bookings`);   
}

if (!data) return <p>Loading...</p>;
               return (
   <div className={styles.container}>
   

      <div className={styles.poster}
      style={{ backgroundImage: `url(${data.poster})` }}
      
      
      >
         <div className={styles.overlay}></div>
         
        <div className={styles.card}>
 <img src={data.poster} alt={data.title} />
        </div>
       

        <div className={styles.info}>
          <h1>{data.title}</h1>
          <div className={styles.detail}> {formatDate(data.date)}</div>
          <div className={styles.venue}>{data.venue}</div>

          <button className={styles.bookButton} onClick={handleBookings}>Book Tickets</button>
        </div>
      </div>

      <div className={styles.description}>
        <h1>About the {title}</h1>
        <p>{data.description} 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro harum suscipit magnam similique veniam commodi aspernatur ratione possimus atque repudiandae, iste rerum est quae dignissimos nisi illo minima quam necessitatibus eos voluptas? Vitae nemo doloribus nostrum sed, pariatur ipsum quo eligendi? Laudantium soluta autem nesciunt cumque nobis saepe, incidunt explicabo!

        </p>
      </div>

      <div className={styles.reviews}>
       {filteredReviews.length > 0 ? <h1>TOP REVIEWS</h1>   : 
    <h1>Reviews Not Available!</h1>
  }

        <div className={styles.wrapper}>
            

  {filteredReviews.map((review)=>{
            // if(review.itemId == data.itemId){
              return(
                    <ReviewCard key={review.id} data = {review}/>
            )
            
            
          }) }


         

          
           
        </div>
        
      </div>
    </div>
  )
}

export default EventInfo