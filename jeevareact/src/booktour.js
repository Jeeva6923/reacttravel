



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './booktour.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Booktour() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      tens: true,
    });
  }, []);

  const [selectedTrip, setSelectedTrip] = useState("");
  const navigate = useNavigate();

  const handleTripChange = (event) => {
    setSelectedTrip(event.target.value);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (selectedTrip) {
      // Navigate to the Calendar page and pass the selected trip as state
      navigate("/calendor", { state: { selectedTrip } });
    } else {
      alert("Please select a trip option before proceeding.");
    }
  };

  return (
    <>
      <a href="/home"><button className="booktour" data-aos="fade-down">RETURN HOME</button></a>
      <div className="tt" data-aos="flip-up">
        <h3 id="mono">Life of a Winery</h3>
        <h1 id="winemaking">A WINEMAKING</h1>
        <h1 id="adventure">ADVENTURE</h1>
        <div id="ppp">
          Check out our availability and book the date and time that <br /> works for you
        </div>
      </div>

      <div id="tripchoose" data-aos="flip-up">
        <div id="ttt">Choose your trip*</div>
        <select id="chooseoption" value={selectedTrip} onChange={handleTripChange}>
          <option value="">-Select-</option>
          <option value="Explore_wineries">Explore Renowned Wineries</option>
          <option value="Wine_scenic_beauty">A Day of Wine and Scenic Beauty</option>
          <option value="Ultimate_wine_journey">The Ultimate Wine Journey</option>
          <option value="Exclusive_vineyard_experience">An Exclusive Vineyard Experience</option>
          <option value="Behind_winery_excursion">Behind the Winery Excursion</option>
          <option value="Premium_wine_tasting">Premium Wine Tasting Experience</option>
        </select>
        <div>
          <button id="next" onClick={handleNextClick} disabled={!selectedTrip}>
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}

export default Booktour;
