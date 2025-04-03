// import React from "react";
import Exclusivevinyard from "./exclusivevinyard";
import './exclusivevinyard.css';
import BasicExample from './navbar';
import Journey from './text';
// import ReactFragment from 'react'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './navbar.css';

function Exclusivevinyards() {
    useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in milliseconds
              tens: true, // Whether animation should happen only once - while scrolling down
            });
          }, []);
    return(
        <>
        <BasicExample/>
        <Exclusivevinyard/>
        </>
    )
}
export default Exclusivevinyards;