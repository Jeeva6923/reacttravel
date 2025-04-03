import React, { useState } from "react";

import Feedbackchild from "./feedbackchild";
import Passcomponent from "./passcomponent";


function Feedback(){
    const [name,setName] = useState('hi')
    const changevalue =()=>{
        setName('welcome  react')
    }
    return(
        <>
        <Passcomponent>
        <Feedbackchild  para1={name} onclick={changevalue}/> 
        </Passcomponent>
        </>
    )
}
export default Feedback;