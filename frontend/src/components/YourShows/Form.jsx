import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./Form.module.css";

/* ---------- CONSTANTS ---------- */

const GENRES = [
  "Action",
  "Comedy",
  "Drama",
  "Thriller",
  "Romance",
  "Horror",
  "Sci-Fi",
  "Documentary",
];

const DEFAULT_SEATS = {
  Royal: { price: "", totalSeats: "", availableSeats: "" },
  Recliner: { price: "", totalSeats: "", availableSeats: "" },
  Gold: { price: "", totalSeats: "", availableSeats: "" },
};

/* ---------- COMPONENT ---------- */

const Form = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const isEventOrSports =
  title?.toLowerCase() === "events" || title?.toLowerCase() === "sports";

  const isMovie =  title?.toLowerCase() === "movies"


const [step, setStep] = useState(isEventOrSports ? 2 : 1);

React.useEffect(() => {
  if (isEventOrSports) {
    setFormData((prev) => ({
      ...prev,
      title: title, // "event" or "sports"
    }));
  }
}, [isEventOrSports, title]);


  const [formData, setFormData] = useState({
    title: "",
    language: "",
    releaseDate: "",
    endDate: "",
    industry: "",
    duration: "",
    genres: [],
    posterUrl: "",
    rating: "",
    description: "",

    theatreName: "",
    location: "",

    showtimes: [],
    currentShowtime: "",

    seats: DEFAULT_SEATS,
  });

  /* ---------- HELPERS ---------- */

  const generateId = (prefix) =>
    `${prefix}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

  /* ---------- HANDLERS ---------- */

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenreChange = (e) => {    // This  logic  is for check box 
    const value = e.target.value
    setFormData((prev) => ({
      ...prev,
      genres: prev.genres.includes(value)
        ? prev.genres.filter((g) => g !== value)
        : [...prev.genres, value],
    }));
  };

  const handleAddShowtime = () => {
    if (
      formData.currentShowtime &&
      !formData.showtimes.includes(formData.currentShowtime)
    ) {
      setFormData((prev) => ({
        ...prev,
        showtimes: [...prev.showtimes, prev.currentShowtime],
        currentShowtime: "",
      }));
    }
  };

  const handleRemoveShowtime = (time) => {
    setFormData((prev) => ({
      ...prev,
      showtimes: prev.showtimes.filter((t) => t !== time),
    }));
  };

  const handleSeatChange = (type, field, value) => {
    setFormData((prev) => ({
      ...prev,
      seats: {
        ...prev.seats,
        [type]: {
          ...prev.seats[type],
          [field]: value,
        },
      },
    }));
  };

  /* ---------- SUBMIT (API BASED) ---------- */

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const baseId = generateId("entity");

    /* ---------- EVENT / SPORTS ---------- */
   if (isEventOrSports) {
  const isSports = title.toLowerCase() === "sports";

  const payload = {
    id: baseId,
    title: formData.title,
    venue: formData.location,
    date: formData.releaseDate,
    poster: formData.posterUrl,
    seats: formData.seats,
  };

  const apiUrl = isSports
    ? "http://localhost:3000/sports"
    : "http://localhost:3000/events";

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  navigate("/yourShow");
  return;
}


    /* ---------- MOVIE FLOW (EXISTING) ---------- */

    const movieData = {
      id: baseId,
      title: formData.title,
      language: formData.language,
      releaseDate: formData.releaseDate,
      endDate: formData.endDate,
      industry: formData.industry,
      duration: formData.duration,
      genres: formData.genres,
      posterUrl: formData.posterUrl,
      rating: formData.rating,
      description: formData.description,
    };

    const theatreData = {
      id: baseId,
      theatreName: formData.theatreName,
      location: formData.location,
    };

    const showsData = formData.showtimes.map((time) => ({
      id: generateId("show"),
      movieId: baseId,
      theatreId: baseId,
      showtime: time,
      seats: JSON.parse(JSON.stringify(formData.seats)),
    }));

    await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    });

    await fetch("http://localhost:3000/theaters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(theatreData),
    });

    await Promise.all(
      showsData.map((show) =>
        fetch("http://localhost:3000/shows", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(show),
        })
      )
    );

    navigate("/yourShow");
  } catch (error) {
    console.error("Submission failed:", error);
    alert("Something went wrong while saving data");
  }
};


  /* ---------- JSX ---------- */

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h1>{title?.toUpperCase()} FORM</h1>

        <form onSubmit={handleSubmit}>
          {/* ---------- STEP 1 ---------- */}
         {step === 1 && !isEventOrSports && (
            <>
              <h3>Movie Details</h3>

              <div className={styles.row}>
                <input name="title" placeholder="Movie Title" onChange={handleChange} />
                <input name="language" placeholder="Language" onChange={handleChange} />
              </div>

              <div className={styles.row}>
                <input type="date" name="releaseDate" onChange={handleChange} />
                <input type="date" name="endDate" onChange={handleChange} />
              </div>

              <div className={styles.row}>
                <select name="industry" onChange={handleChange}>
                  <option value="">Select Industry</option>
                  <option value="bollywood">Bollywood</option>
                  <option value="hollywood">Hollywood</option>
                  <option value="tollywood">Tollywood</option>
                </select>

                <input type="time" name="duration" onChange={handleChange} />
              </div>

              <div className={styles.genreBox}>
                {GENRES.map((g) => (
                  <label key={g}>
                    <input
                      type="checkbox"
                      value={g.toLowerCase()}
                      onChange={handleGenreChange}
                    />
                    {g}
                  </label>
                ))}
              </div>

              <div className={styles.row}>
                <input name="posterUrl" placeholder="Poster URL" onChange={handleChange} />
                <input type="number" name="rating" placeholder="Rating" onChange={handleChange} />
              </div>

              <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
              />

              <button type="button" onClick={() => setStep(2)}>
                Next →
              </button>
            </>
          )}

          {/* ---------- STEP 2 ---------- */}
          {step === 2 && (
            <>
              <h3>{isEventOrSports ? "Event / Venue Details" : "Theatre Details"}</h3>
                 {isEventOrSports && (
  <div className={styles.row}>
    <input
      name="title"
      placeholder="Event Title"
      onChange={handleChange}
    />
    <input
      type="datetime-local"
      name="releaseDate"
      onChange={handleChange}
    />
  </div>
)}

{isEventOrSports && (
  <div className={styles.row}>
    <input
    name="posterUrl"
    placeholder="Event Poster URL"
    onChange={handleChange}
  />
               <input name="location" placeholder="Location" onChange={handleChange} className="location" /> 
  </div>

)}
          {isMovie && (
             <div className={styles.row}>
                <select name="theatreName" onChange={handleChange}>
                  <option value="">Select Cinema</option>
                  <option value="PVR">PVR</option>
                  <option value="INOX">INOX</option>
                  <option value="Cinepolis">Cinepolis</option>
                </select>
               <input name="location" placeholder="Location" onChange={handleChange} className="location" /> 

              </div>
          )}


             


              {/* SHOWTIMES */}
                {isMovie && (
              <div className={styles.showtimeSection}>
                <h4>Showtimes</h4>
                <div className={styles.row}>
                  <input
                    type="time"
                    value={formData.currentShowtime}
                    onChange={(e) =>
                      setFormData({ ...formData, currentShowtime: e.target.value })
                    }
                  />
                  <button type="button" onClick={handleAddShowtime}>
                    Add
                  </button>
                </div>

                <ul>
                  {formData.showtimes.map((t) => (
                    <li key={t}>
                      {t}
                      <button type="button" onClick={() => handleRemoveShowtime(t)}>
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
                )}

              {/* SEATS */}
              <div className={styles.seatSection}>
                <h4>Seat Configuration</h4>

                {["Royal", "Recliner", "Gold"].map((type) => (
                  <div key={type} className={styles.seatCard}>
                    <h5>{type}</h5>
                    <div className={styles.row}>
                      <input
                        type="number"
                        placeholder="Price"
                        value={formData.seats[type].price}
                        onChange={(e) =>
                          handleSeatChange(type, "price", e.target.value)
                        }
                      />
                      <input
                        type="number"
                   placeholder="Total"
                        value={formData.seats[type].totalSeats}
                        onChange={(e) =>
                          handleSeatChange(type, "totalSeats", e.target.value)
                        }
                      />
                      <input
                        type="number"     
                        placeholder="Available"
                        value={formData.seats[type].availableSeats}
                        onChange={(e) =>
                          handleSeatChange(type, "availableSeats", e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.actions}>
               {!isEventOrSports && (
  <button type="button" onClick={() => setStep(1)}>
    ← Back
  </button>
)}
                <button type="submit">
  {isEventOrSports ? "Save Event" : "Save Movie"}
</button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
