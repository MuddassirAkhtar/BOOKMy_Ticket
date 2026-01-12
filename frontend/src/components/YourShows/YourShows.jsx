import React, { useState } from "react";
import styles from "./YourShow.module.css";

import {
  PartyPopper,
  Trophy,
  Tent,
  Speech,
  Guitar,
  Popcorn
} from "lucide-react";
import { useNavigate } from "react-router";

const YourShows = () => {
  const [formType, setFormType] = useState("");
  const navigate = useNavigate();

  const eventType = [
    { id: 1, name: "Events", icon: Guitar },
    { id: 2, name: "Movies", icon: Popcorn },
    { id: 3, name: "Exposition", icon: Tent, status: "commingSoon" },
    { id: 4, name: "Parties", icon: PartyPopper, status: "commingSoon" },
    { id: 5, name: "Sports", icon: Trophy },
    { id: 6, name: "Conferences", icon: Speech, status: "commingSoon" }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What Can You Host?</h1>

      <div className={styles.cardsWrapper}>
        {eventType.map((data) => {
          const Icon = data.icon;
          const isComingSoon = data.status === "commingSoon";

          return (
            <div
              key={data.id}
              onClick={() => {
                setFormType(data.name);
                navigate(`/yourShow/${data.name.toLowerCase()}`);
              }}
              className={`${styles.card} ${
                isComingSoon ? styles.disabled : ""
              }`}
            >
              <Icon size={100} strokeWidth={1.25} />
              <span className={styles.cardTitle}>{data.name}</span>

              {isComingSoon && (
                <div className={styles.comingSoon}>Coming Soon</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourShows;
