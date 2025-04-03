import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BasicExample from './navbar';
import Scenicbeauty from './scenicbeauty';



function Scenicbeautyhome(){
    useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in milliseconds
              tens: true, // Whether animation should happen only once - while scrolling down
            });
          }, []);
    return(
        <>
      <BasicExample/>
      <Scenicbeauty/>
      </>
    )
}
export default Scenicbeautyhome;