import React from "react";
import { LayoutDashboard,UserPen,Ticket,Heart,IndianRupee,Settings,Power } from 'lucide-react';
import { Outlet } from "react-router";

import style from "./UserProfile.module.css";
import { useNavigate } from "react-router";



const UserProfile = () => {

const navigate = useNavigate();




  const userDashboard = [
  {
    id: 1,
    name: "Dashboard",
    url: "dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    name: "My Profile",
    url: "profile",
    icon: UserPen,
  },
  {
    id: 3,
    name: "My Bookings",
    url: "bookings",
    icon: Ticket,
  },
  {
    id: 4,
    name: "Wishlist",
    url: "wishlist",
    icon: Heart,
  },
  {
    id: 5,
    name: "Payments",
    url: "payments",
    icon: IndianRupee,
  },
  {
    id: 6,
    name: "Settings",
    url: "settings",
    icon: Settings,
  },
 
];
  return (
    <div className={style.container}>
      <div className={style.dashbord}>
        {userDashboard.map((data) => {
          let Icon = data.icon;
          return(
            
          <div key={data.id}
           className={style.dashbordData}
           onClick={()=>navigate(data.url)}
          >
            
              <Icon size={20}/>
            {data.name}
          
          </div>)
        })}
      </div>
      <div className={style.displayCont}>
        <Outlet/>
      </div>
    </div>
  );
};

export default UserProfile;
