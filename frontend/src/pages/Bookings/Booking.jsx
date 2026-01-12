import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Booking.module.css";
import { asyncLoadTheater } from "../../store/actions/theaterAction";
import { useParams } from "react-router";

const Booking = () => {
  const { title, id } = useParams();
  const dispatch = useDispatch();
  const theaters = useSelector((state) => state.theaterReducer.theater);

  //  Movies Slice
  const movies = useSelector((state) => state.movieReducer.movie);

  const movie = movies.find((m) => String(m.id) === id);


  // images for logo 
  const image = [
    {
        name: "INOX Multiplex",

      url: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/inox-movies-logo.png",
    },
    {
    name: "PVR Cinemas",
      url: "https://i.pinimg.com/736x/8d/30/db/8d30db5df5d6a501c8fe50de99db7815.jpg",
    },
    {
      name: "Cinepolis",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozlILAjkSKohQb8KB0eilqM4q3WLpC_Z7Q&s",
    },
  ];


  useEffect(() => {
    dispatch(asyncLoadTheater()); // 👈 THIS was missing
  }, [dispatch]);
  return (
    <div className={style.Cont}>

      <div className={style.MovieName}>
        <h1>
          {movie?.title} ({movie?.language}){" "}
        </h1>

        <div className={style.MovieInfo}>
          <span className={style.infoTag}>Duration: {movie?.duration} </span>
          <span className={style.infoTag}>Genere: {movie?.genre}</span>
          <span className={style.infoTag}>Language : {movie?.language}</span>
        </div>
      </div>

      <div className={style.theaterList}>
        {theaters.map((data) => {
          if(data.id == id ){
                     return (
            <div key={data.id} className={style.theaterCont}>
              <div className={style.logoCont}>
                <div className={style.logo}>
                  {image.map((img) =>
                    img.name == data.name ? (
                      <img key={img.name} src={img.url} alt={img.name} />
                    ) : null
                  )}
                  
                </div>

                <div className={style.theaterName}>
                  {data.name}: {data.location}
                </div>
              </div>

              <div className={style.timeCont}>
                {data.screens?.map((screen) => (
                  <div key={screen.screenId}>
                    {screen.showTimes?.map((time, index) => (
                      <div className={style.timing} 
                      
                      
                      >
                        {time}

                        <span className={style.info }
                        key={index}

                  
                        >   Totalseats:{data.availableSeats}
                            <br/>  Price :250
                         </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
          }else{
                    
          }
         
        })}
      </div>
    </div>
  );
};

export default Booking;
