import React from 'react'
import {Link} from "react-router"
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { openAuthModel } from '../../store/reducer/authSlice';
import { useSelector } from 'react-redux';
import { asyncLogOutUser } from '../../store/actions/authAction';

import styles from "./nav.module.css"
const Nav = () => {

    const { user, isLoggedIn } = useSelector((state) => state.authReducer);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler=()=>{
     dispatch(openAuthModel());

  }
  const goToHomeHandler = ()=>{
     navigate("/")
  }

  const logOutHandler = ()=>{
    dispatch(asyncLogOutUser())
    console.log("logged out ")
  }
  return (
    <div className={styles.container}>
      <div className={styles.sec1}>
        <h1 onClick={goToHomeHandler}>BookMy_Ticket</h1>
        <div className={styles.searchBar}>
          <IoSearchOutline />
          <input type="text" placeholder='Search for Movies,Sports & Events' />
        </div>
        <div  className={styles.menu}>
{isLoggedIn ? (
  <button onClick={logOutHandler}>LogOut</button>
) : (
  <button onClick={loginHandler}>SignIn</button>
)}
          
          

        
        
        </div>


      </div>
      <div className={styles.sec2}>
        <div className={styles.link}>
          <Link to="/movie">Movies</Link>
          <Link to="/events">Events</Link>
          <Link to="/sports">Sports</Link>
        </div>
        <div className={styles.link} >
          {isLoggedIn?
          <><Link to="/yourShow"> ListYoueShow</Link>
          <Link to="/profile"> Profile</Link>
          <Link to="/tickets"> YourTickets</Link></>
        :""}
          
        </div>
      </div>
    </div>
  )
}

export default Nav