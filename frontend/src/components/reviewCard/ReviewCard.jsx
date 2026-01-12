import React, { useEffect, useState } from 'react'
import { FaRegUserCircle,FaStar } from "react-icons/fa";
import { BiDislike,BiLike} from "react-icons/bi";
import styles from "./reviewCard.module.css"
import axios from 'axios';
const ReviewCard = ({ data }) => {

  const [likes, setLikes] = useState(data.likes);
  const [disLikes, setDisLikes] = useState(data.dislikes);
  const [userReaction, setUserReaction] = useState(null);

  const likeHandler = async () => {
    if (userReaction === "liked") return;

    let newLikes = likes;
    let newDisLikes = disLikes;

    if (userReaction === "disliked") {
      newDisLikes -= 1;
    }

    newLikes += 1;

    setLikes(newLikes);
    setDisLikes(newDisLikes);
    setUserReaction("liked");

    await axios.patch(`http://localhost:3000/reviews/${data.id}`, {
      likes: newLikes,
      dislikes: newDisLikes
    });
  };

  const dislikeHandler = async () => {
    if (userReaction === "disliked") return;

    let newLikes = likes;
    let newDisLikes = disLikes;

    if (userReaction === "liked") {
      newLikes -= 1;
    }

    newDisLikes += 1;

    setLikes(newLikes);
    setDisLikes(newDisLikes);
    setUserReaction("disliked");

    await axios.patch(`http://localhost:3000/reviews/${data.id}`, {
      likes: newLikes,
      dislikes: newDisLikes
    });
  };
  return (
    <div className={styles.container}>

          <div className={styles.top}>
                   <div className={styles.userInfo}>
                    <FaRegUserCircle className={styles.userIcon} />

                    <div>
                              <p>{data.userName}</p>
                              <p>Booked on  BookMy_Ticket </p>
                    </div>
                   </div>
                    <div className={styles.rating}>
                              <FaStar className={styles.star} />
                              <p>{data.rating}/5</p>

                    </div>
          </div>

          <div>
                    <p>
                      {data.comment}
                    </p>
          </div>

          <div className={styles.bottom}>
                    <div className={styles.btn}>
                              <div><BiLike onClick={likeHandler}   className={userReaction === "liked" ? styles.active : ""} /><span>{likes}</span></div>
                              <div><BiDislike onClick={dislikeHandler}  className={userReaction === "disliked" ? styles.active : ""} /> <span>{disLikes}</span></div>
                    
                    
                    </div>
                    <div>x days ago </div>
          </div>

    </div>
  )
}

export default ReviewCard