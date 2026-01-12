import React, { useState } from "react";
import style from "./Profile.module.css";
import axios from "axios";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    location: user?.location || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/users/${user.id}`, formData);

      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, ...formData })
      );

      setIsEditing(false);
      alert("Profile updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return <p>Please login first</p>;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.Pic}></div>
        <div>
          <button type="button">Upload New Photo</button>
          <p>At least 800 × 800 px recommended.</p>
        </div>
      </div>

      <div className={style.personalInfo}>
        <form onSubmit={handleSubmit}>
          <div className={style.personalInfoHeader}>
            <h1>Personal Info</h1>

            <div className={style.btnCont}>
              {!isEditing && (
                <button type="button" onClick={() => setIsEditing(true)}>
                  Edit
                </button>
              )}
              {isEditing && <button type="submit">Save</button>}
            </div>
          </div>

          <div className={style.Info}>
            <div>
              <span>Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div>
              <span>Location</span>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </form>
      </div>
        <div className={style.password}>
        <div>
          <span>Password</span>
          <input type="password" defaultValue={formData.password} readOnly />
        </div>
        <button>Edit Password</button>
      </div>
    </div>
  );
};

export default Profile;








