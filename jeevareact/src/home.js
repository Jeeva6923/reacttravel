// import React from "react";

import './navbar.css';
import BasicExample from './navbar';
import Card from './card';
import './card.css';
import Journey from './text';
import About from './about';
import './about.css';
import Sunset from './sunset';
import './sunset.css';
import Sunsetp from './susetp';
import AutoLayoutExample from './container';
import './container.css';
import './feedback1.css';
import Feedbacks from './feedback1';
import Card2 from './card2';
import './card2.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResponsiveAutoExample from './yourtour';
import './yourtour.css';
import Hidden from './hidden';
import './hidden.css';
import './abovefooter.css';
import Footer from './footer';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function Home(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          tens: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return(
        <>
         <BasicExample/>
    <Journey/>
    <Card/>
    <About/>
    <Sunset/>
    <Sunsetp/>
    <AutoLayoutExample/>
    <Feedbacks/>
    <Card2/>
    <ResponsiveAutoExample/>
    <Hidden/>
    <Footer/>
        </>
    )
}
export default Home;