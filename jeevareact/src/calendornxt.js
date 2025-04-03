// import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState,useEffect } from "react";
import './calendornxt.css'
import { useLocation, useNavigate } from "react-router-dom";
function Calendornxt(){
     useEffect(() => {
              AOS.init({
                duration: 1000, // Animation duration in milliseconds
                tens: true, // Whether animation should happen only once - while scrolling down
              });
            }, []);
const [name,setname]=useState('');
const [email,setmail]=useState('');
const [phone,setphone]=useState('');
const [notes,setnotes]=useState('');
function uservalue(e){
    setname(e.target.value)
    // setmail(e.target.value)
}
function uservaluee(e){
  setmail(e.target.value)
}
function uservalueee(e){
  setphone(e.target.value)
}
function usernote(e){
  setnotes(e.target.value)
}
function BACK(){
  window.location.href='/reservation'
}

//*****************************************8 */
// const location = useLocation(); // Get location object
// const selectedTrip = location.state?.selectedTrip; // Retrieve selected trip from state
// const navigate = useNavigate();
// const nex = () => {
//   // Navigate to the Confirmation page and pass the selected trip
//   navigate("/reservation", { state: { selectedTrip } });
// };
//**********************************************8 */
    return(
      
       
       <div>
        <a href="/home"><button className="booktour"  data-aos="fade-down">RETURN HOME</button></a>
        <div className="tt" data-aos="fade-up">
            <h3 id="mono">Life of a Winery</h3>
            <h1 id="winemaking">A WINEMAKING</h1>
            <h1 id="adventure">ADVENTURE</h1>
            <div id="ppp">Check out our availability and book the date and time that <br /> works for you</div>
            </div>
            <p className='info'>Your Information</p>
            <form>
            <label><b>Name*</b><h3 id='h33'>{name}</h3>
              <input type='text' placeholder='Enter Your Name' onChange={uservalue} required='please enter your name'></input></label><br></br>
              <label>
              <b>Email*</b><h3 id='h33'>{email}</h3>
                <input type='email' placeholder='Enter your Mail' onChange={uservaluee} required='enter'></input>
              </label><br></br>
              <label>
              <b>Phone*</b><h3 id='h33'>{phone}</h3>
                <input type='number' placeholder='Enter Your Number' onChange={uservalueee} maxLength={10} required='enter'></input>
              </label><br></br>
              <label>
            <b id='booking'>Booking Notes*</b><h3 id='h33'>{notes}</h3>
                <textarea type='text' onChange={usernote}  required='enter'></textarea>
              </label>
            {/* </form> */}
            <div className='nb'>
            <button id='back' className='b' onClick={BACK}>BACK</button>
            <a href=''><button id='nextts' >NEXT</button></a></div>
            </form>
            </div>
    )
    }
export default Calendornxt;