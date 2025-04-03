import React from "react";
import customer from './images/customer.PNG'
import dream from './images/dream.PNG'
import tail from './images/tail.PNG'

function Feedbacks(){
    return(
        <div class="container-fluid" className="scroll-containers">
            <div className="customer">
                <img src={customer}></img>
            </div>
            <div className="service">
                <img src={dream}></img>
            </div>
            <div className="service">
                <img src={tail}></img>
            </div>
        </div>
    )
}
export default Feedbacks;