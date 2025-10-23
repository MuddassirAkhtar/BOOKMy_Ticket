import React from 'react'
import styles from "./hero.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef,useEffect } from 'react';

const Hero = () => {

  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.clientWidth * 0.7;  
    }
  }, []);

  const scrollLeft = ()=>{
        scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth *0.8, behavior: "smooth" });

  }
  const scrollRight = ()=>{
        scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth * 0.8, behavior: "smooth" });

  }
  return (
    <div className={styles.heroContainer} ref={scrollRef}>
     
    
      <div className={styles.img1}></div>
      <div className={styles.img2}></div>
      <div className={styles.img1}></div>
      <div className={styles.img2}></div>
      <div className={styles.img1}></div>
      
      <button className={styles.btn1} onClick={scrollLeft}><IoIosArrowBack />
</button>
      <button className={styles.btn2} onClick={scrollRight}><IoIosArrowForward />
 </button>


    </div>
  )
}

export default Hero