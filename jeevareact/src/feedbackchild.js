import React from "react";


function Feedbackchild(props){
    const {para1}=props
    const {onclick}=props
    return(
        <>
        <h1>{para1}</h1>
        <button onClick={onclick}>click</button>
        </>
    )
}
export default Feedbackchild;