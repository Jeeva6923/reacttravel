
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './navbar.css';
// import BasicExample from './navbar';
// import Card from './card';
// import './card.css';
// import Journey from './text';
// import About from './about';
// import './about.css';
// import Sunset from './sunset';
// import './sunset.css';
// import Sunsetp from './susetp';
// import AutoLayoutExample from './container';
// import './container.css';                                        <--- first
// import Feedback from './feedback1';
// import './feedback1.css';
// import Feedbacks from './feedback1';
// import Card2 from './card2';
// import './card2.css';
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import ResponsiveAutoExample from './yourtour';
// import './yourtour.css';
// import Hidden from './hidden';
// import './hidden.css';
// import './abovefooter.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
// import  ContactUs from './mail';
import Exclusivevinyards from './exclusiveyardhome';
import Journeyhome from './journeyhome';
import Scenicbeautyhome from './scenicbeautyhome';
import Reownedhome from './reownedhome';
import Tastinghome from './tastinghome';
import Excursionhome from './excursionhome';
import Booktour from './booktour';
import BasicExample from './navbar';
import Calendors from './calendor';
import Calendornxt from './calendornxt';
import Reservation from './reservation';
// import emailjs from '@emailjs/browser';

// import https:web.whatsapp.com from './navbar';
function App() {
  // useEffect(() => {
  //         AOS.init({
  //           duration: 1000, // Animation duration in milliseconds
  //           tens: true, // Whether animation should happen only once - while scrolling down
  //         });
  //       }, []);
  return (
    <>
    {/* <BasicExample/>
    <Journey/>
    <Card/>
    <About/>
    <Sunset/>
    <Sunsetp/>
    <AutoLayoutExample/> */}
    {/* <Feedback/>
    <Passcomponent/> */}
    {/* <Feedbacks/>
    <Card2/>
    <ResponsiveAutoExample/>
    <Hidden/> */}
    {/* <Example/> */}
    {/* <Message/> */}
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />} />
       {/* <Route path="/mail" element={< ContactUs />} />  */}
       <Route path="/exclusivevinyard" element={< Exclusivevinyards/>} /> 
       <Route path="/winejourney" element={<Journeyhome/>} />
       <Route path="/scenicbeauty" element={< Scenicbeautyhome/>} />
       <Route path="/reowned" element={<Reownedhome/>} />
       <Route path="/tasting" element={<Tastinghome/>} />
       <Route path="/excursion" element={<Excursionhome />} />
       <Route path="/booktour" element={<Booktour/>} />
       <Route path='/home' element={<Home/>}/>
       {/* <Route path='/https://web.whatsapp.com/' element={<Home/>}/> */}
       <Route path='/calendor' element={<Calendors/>}/>
       <Route path='/calendornxt' element={<Calendornxt/>}/>
       <Route path='/reservation' element={<Reservation/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
