// import React from "react";
// import nature2 from "./images/nature2.jpg";
// import './exclusivevinyard.css';
// import grandtour from './images/grandtour.png';
// function Excursion() {
//   return (
//     <>
//     <div className="vineyard1">
//     <div  id="vineyardnav">
//       <img src={nature2} id="imggg"></img>


//       {/* <p id="an">An Exclusive Vineyard Experience
//       Join us for an unforgettable journey through the heart of our vineyard and winery, where tradition meets innovation</p> */}
//     </div>
//     <p id="an"><h3>BEHIND-THE-SCENENS WINERY <br></br> EXCURSION</h3>
//     JOIN US FOR AN UNFORGOTTABLE JOURNEY THROUGH THE HEART OF <br></br> OUR VINEYARD AND  WINERY, WHERE TRADITION MEETS INNOVATION..</p>
//     <div className="vineyard12">
//         <h1 id="ex">BEHIND-THE-</h1>
//         <h1 id="vi"> SCENES WINERY</h1>
//         <h1 id="exp"> EXCURSION</h1>


//         <div id="tex"><p id="tet">
//         Check out our availability and book the date and time that works for you</p>
//         </div>

//         <div id="choose">
//         <b>Choose your Trip*</b>

//         <select id="chooseoption">
//   <option value="option1" id="op1">-Select-</option>
//   <option value="option2" id="op2">Explore Reowned Wineries</option>
//   <option value="option3" id="op3">A Day of Wine and Scenic Beauty</option>
//   <option value="option3">The Ultimate Wine Journey</option>
//   <option value="option3" id="op3">An Exclusive Wineyard Experience</option>
//   <option value="option3" id="op3">Behind the Winery Excursion</option>
//   <option value="option3" id="op3">Premium Wine Tasting Experience</option>
// </select>
    

//     <button id="next">NEXT</button>

//         </div>
//     </div>
//     </div>
//     <div className="footers">
//             <div className="footer">
//                 <div className="footer1">
//                     <img src={grandtour} alt="grandtour" />
//                     <div id="theme">© ThemeGoods Theme</div>
//                 </div>
//                 <div className="footer2">
//                     <h4>Vineyard Vistas: A Day of</h4> 
//                         <h4>Wine and Scenic Beauty</h4>
    
    
//     <div className="footer3">
//                         <a href="" id="num"><h5>+1 (833) 215 9353</h5></a>
//                         <a href="" id="mail"><h5>contact@grandtour.com</h5>
//                         </a>
//                         <div id="social">
//                         <a href=""><b>Instagram</b></a>
//                         <a href=""><b>Facebook</b></a>
//                         <a href=""><b>Whatsapp</b></a></div>
//                         </div>
//                 </div>
//             </div>
//             </div>
//     </>
//   );
// }
// export default Excursion;


// import React from "react";
// import grape from "./images/grape.avif";
import nature from "./images/nature.avif";
import './Excursion.css';
import './exclusivevinyard.css';
import grandtour from './images/grandtour.png';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Excursion() {
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
    <div className="vineyard1">
    <div  id="vineyardnav">
      <img src={nature} id="imggg" data-aos="zoom-in-up"></img>


      {/* <p id="an">An Exclusive Vineyard Experience
      Join us for an unforgettable journey through the heart of our vineyard and winery, where tradition meets innovation</p> */}
    </div>
    <p id="an" data-aos="zoom-in-up"><h3>Behind-the-Scenes Winery Excursion</h3>
      Join us for an unforgettable journey through the heart of our vineyard and <br></br> winery, where tradition meets innovation</p>
    <div className="vineyard12" data-aos="zoom-in-up">
        <h1 id="ex">BEHIND-THE-</h1>
        <h1 id="vie"> SCENES WINERY</h1>
        <h1 id="expe"> EXCURSION</h1>
        <div id="tex"><p id="tet">
        Check out our availability and book the date <br></br> and time that works for you</p>
        </div>
          
        <div id="choose">
          <b>Choose your Trip*</b>

        <div><select id="chooseoption"  value={selectedTrip} onChange={handleTripChange}  >
  <option value="option1" id="op1">-Select-</option>
  <option value="Explore Reowned Wineries" id="op2">Explore Reowned Wineries</option>
  <option value="A Day of Wine and Scenic Beauty" id="op3">A Day of Wine and Scenic Beauty</option>
  <option value="The Ultimate Wine Journey">The Ultimate Wine Journey</option>
  <option value="An Exclusive Wineyard Experience" id="op3">An Exclusive Wineyard Experience</option>
  <option value="Behind the Winery Excursion" id="op3">Behind the Winery Excursion</option>
  <option value="Premium Wine Tasting Experience" id="op3">Premium Wine Tasting Experience</option>
</select>
    </div>

    <button id="next" onClick={handleNextClick} disabled={!selectedTrip} >NEXT</button>

        </div>
    </div>
    </div>
    <div className="footers">
            <div className="footer">
                <div className="footer1">
                    <img src={grandtour} alt="grandtour" />
                    <div id="theme">© ThemeGoods Theme</div>
                </div>
                <div className="footer2">
                    <h4>Vineyard Vistas: A Day of</h4> 
                        <h4>Wine and Scenic Beauty</h4>
    
    
    <div className="footer3">
                        <a href="" id="num"><h5>+1 (833) 215 9353</h5></a>
                        <a href="" id="mail"><h5>contact@grandtour.com</h5>
                        </a>
                        <div id="social">
                        <a href=""><b>Instagram</b></a>
                        <a href=""><b>Facebook</b></a>
                        <a href=""><b>Whatsapp</b></a></div>
                        </div>
                </div>
            </div>
            </div>
    </>
  );
}
export default Excursion;




