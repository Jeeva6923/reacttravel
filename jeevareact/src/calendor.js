// import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendor.css';
import React, { useState,useEffect } from "react";
import './booktour.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation, useNavigate } from "react-router-dom";

export default function Calendors() {
  useEffect(() => {
          AOS.init({
            duration: 1000, // Animation duration in milliseconds
            tens: true, // Whether animation should happen only once - while scrolling down
          });
        }, []);
    const [value, onChange] = useState(new Date());
   
    function routechange(){
      window.location.href = '/booktour';
    }
    // function routechangenxt(){
    //   window.location.href='./calendornxt';
    // }


//***************************************************8 */

    //this is used to display the selected item in one page to another page
    const location = useLocation(); // Get location object
    const selectedTrip = location.state?.selectedTrip; // Retrieve selected trip from state
    const [selectedDate, setSelectedDate] = useState(""); // State for the selected date
    const navigate = useNavigate();
    const nexx = () => {
      // Navigate to the Confirmation page and pass the selected trip
      navigate("/reservation", { state: { selectedTrip } });
    };

    //***********************************************88 */
    return (
        <div>
            <a href="/home"><button className="booktour"  data-aos="fade-down">RETURN HOME</button></a>
            <div className="tt" data-aos="fade-up">
                <h3 id="mono">Life of a Winery</h3>
                <h1 id="winemaking">A WINEMAKING</h1>
                <h1 id="adventure">ADVENTURE</h1>
                <div id="ppp">Check out our availability and book the date and time that <br /> works for you</div>
            </div>
            <Calendar
                onChange={onChange}
                value={value}
                id="calendor" data-aos="fade-up"
            />

            <div id='btn1'>
              <div id='btns1'>
              <button  id='bbb'>8:00 AM</button>
              <button id='bbb'>8:30 AM</button>
              <button id='bbb'>9:00 AM</button></div>
              <div id='btns1'>
              <button  id='bbb'>9:30 AM</button>
              <button id='bbb'>10:00 AM</button>
              <button id='bbb'>10:30 AM</button></div>
              <div id='btns1'>
              <button  id='bbb'>11:00 AM</button>
              <button id='bbb'>11:30 AM</button>
              <button id='bbb'>11:00 AM</button></div>
            </div>
            <div id='bcknxt'>
            <button id="back" onClick={routechange}>BACK</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           <a href='/reservation'><button id="nextts" onClick={nexx}>NEXT</button></a>
            </div>
        </div>
        
    );
}