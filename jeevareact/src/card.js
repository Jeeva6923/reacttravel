import React from "react";
import women from "./images/women.jpg";
import vinegroup from "./images/vinegroup.avif";
import beer from "./images/beer.jpg";
import wine from "./images/wine.avif";
import lady from "./images/lady.avif";
import nature from "./images/nature.avif";
import wine2 from "./images/wine2.avif";
import Exclusivevinyard from "./exclusivevinyard";

function Card() {
  return (
    <>
      <div class="container-fluid" className="scroll-container">
        <div data-aos="flip-left" className="grape">
          <a href="/exclusivevinyard">
            <img src={women} id="image"></img>
          </a>
          <div className="vine">
            <h3>An Exclusive Vineyard </h3> <h3>Experience</h3>
          </div>
          <div className="view">
            <a href="/exclusivevinyard">
              <button className="viewbtn">View</button>
            </a>
          </div>
          <div className="from99">
            <h6>From</h6>
            <h6>$99</h6>
          </div>
        </div>
        <div data-aos="flip-left" className="grape">
          <a href="winejourney">
            <img src={vinegroup}></img>
          </a>
          <div className="vine">
            <h3>An Ultimate Wine</h3> <h3>Journey</h3> 
          </div>
          <div className="view">
              <a href="winejourney"><button className="viewbtn">View</button>
              </a>
              </div>
              <div className="from99">
                <h6>From</h6>
                <h6>$69</h6>
              </div>
          </div>
                <div data-aos="flip-left" className="grape">
          <a href="Scenicbeauty">
            <img src={beer}></img>
          </a>
          <div className="vine">
            <h3>A Day of Wine and</h3> <h3>Scenic Beauty</h3> 
          </div>
          <div className="view">
              <a href="/scenicbeauty"><button className="viewbtn">View</button>
              </a>
              </div>
              <div className="from99">
                <h6>From</h6>
                <h6>$79</h6>
              </div>
          </div>
                <div data-aos="flip-left" className="grape">
          <a href="/reowned">
            <img src={lady}></img>
          </a>
          <div className="vine">
            <h3>Explore Renowned</h3> <h3>Wineries</h3> 
          </div>
          <div className="view">
              <a href="/reowned"><button className="viewbtn">View</button>
              </a>
              </div>
              <div className="from99">
                <h6>From</h6>
                <h6>$99</h6>
              </div>
          </div>
          <div className="grape">
          <a href="/tasting">
            <img src={wine2}></img>
          </a>
          <div className="vine">
            <h3>Premium Wine Tasting</h3> <h3>Experience</h3> 
          </div>
          <div className="view">
              <a href="/tasting"><button className="viewbtn">View</button>
              </a>
              </div>
              <div className="from99">
                <h6>From</h6>
                <h6>$49</h6>
              </div>
          </div>
          <div data-aos="flip-left" className="grape">
          <a href="/excursion">
            <img src={nature}></img>
          </a>
          <div className="vine">
            <h3>Behind-the-Scenes</h3> <h3>Winery Excursion</h3> 
          </div>
          <div className="view">
              <a href="/excursion"><button className="viewbtn">View</button>
              </a>
              </div>
              <div className="from99">
                <h6>From</h6>
                <h6>$69</h6>
              </div>
          </div>
      </div>
    </>
  );
}
export default Card;
