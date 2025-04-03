import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState,useEffect } from "react";
import './calendornxt.css'
import './reservation.css'
import Booktour from './booktour';



import { useLocation } from "react-router-dom";

function Reservation(){
    
     useEffect(() => {
              AOS.init({
                duration: 1000, // Animation duration in milliseconds
                tens: true, // Whether animation should happen only once - while scrolling down
              });
            }, []);




            //*****************************/
            const location = useLocation(Booktour); // Get location object
//   const selectedTrip = location.state?.selectedTrip; // Retrieve selected trip from state

  const { selectedTrip, selectedDate } = location.state || {}; // Retrieve selected trip and date from state

  //********************************************888 */
return(
<div>
        <a href="/home"><button className="booktour"  data-aos="fade-down">RETURN HOME</button></a>
        <div className="tt" data-aos="fade-up">
            <h3 id="mono">Life of a Winery</h3>
            <h1 id="winemaking">A WINEMAKING</h1>
            <h1 id="adventure">ADVENTURE</h1>
            <div id="ppp">Check out our availability and book the date and time that <br /> works for you</div>
            </div>
            <p id='reservation'>Your Reservation</p>
<div className='rr'>
            {selectedTrip ? (
        <p id='res'>You selected the trip: <strong>{selectedTrip}</strong></p>
      ) : (
        <p id='trip'>No trip selected</p>
        
      )}
      
      {/* <date>111</date> */}
<label><h6 id='clients'>clients</h6>
<input type='number' placeholder='Enter the Number of Clients'></input>
</label>
<h6 id='location'>LOCATION</h6>
<h7 id='france'>FRANCE</h7>
<div id='eem'>
    {/* <div id='empl'><h6 id='emp'>EMPLOYEE</h6></div>
    <div id='price'><h6 id='p'>PRICE</h6></div> */}
    <li id='e'>EMPLOYEE</li>
    <li id='p'>PRICE</li>
</div>
<div id='eem'>
    {/* <div id='empl'><h6 id='emp'>EMPLOYEE</h6></div>
    <div id='price'><h6 id='p'>PRICE</h6></div> */}
    <li id='e'>Scarlett Johnson</li>
    <li id='p9'>$99</li>
</div>

<a href="/calendor"><button id='edit'>EDIT</button></a>
      </div>
      <h5 id='tot'>Total</h5>
      <h5 id='tot99'>$99</h5>
      <a href='calendornxt'><button id='nextnext'>NEXT</button></a>
            </div>

)
}
export default Reservation;