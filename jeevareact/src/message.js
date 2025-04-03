import React, { useLayoutEffect,useState } from "react";

function Message(){
    const [message] = useState("");
    useLayoutEffect(() => {
        alert("Hello, This is a message from Grand Tour trying to open some other Apps");
    });
    return(
        <>
        <h1>{message}</h1>
        <h1>Message</h1>
        </>
    )
}
export default Message;