import React from 'react'
import {Link} from "react-router"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

import styles from "./nav.module.css"
const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sec1}>
        <h1>BookMy_Ticket</h1>
        <div className={styles.searchBar}>
          <IoSearchOutline />
          <input type="text" placeholder='Search for Movies,Sports & Events' />
        </div>
        <div className={styles.menu}><button>SignIn</button>
        <RxHamburgerMenu  className={styles.hamburger} /></div>


      </div>
      <div className={styles.sec2}>
        <div className={styles.link}>
          <Link to="/movie">Movies</Link>
          <Link to="/events">Events</Link>
          <Link to="/sports">Sports</Link>
        </div>
        <div className={styles.link} >
          <Link>ListYoueShow</Link>
          <Link>Profile</Link>
          <Link>YourTickets</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav