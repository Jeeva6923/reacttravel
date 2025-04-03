// import React from "react";
import nature2 from './images/nature2.jpg'
import menwo from './images/menwo.jpg'
import women from './images/women.jpg'
import wines from './images/wines.jpg'


function Card2(){
    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000, // Animation duration in milliseconds
    //       once: true, // Whether animation should happen only once - while scrolling down
    //     });
    //   }, []);
    return(
        <>
        <div data-aos="fade-up" class="container-fluid" className="scroll-container2">
            <div className="n">
            <img src={nature2}></img></div>
            <div className="g">
                <img src={menwo}></img>
            </div>
            <div className="p">
                <img src={women}></img>
            </div>
            <div className="o">
                <img src={wines}></img>
            </div>
        </div>
        </>
    )
}
export default Card2;