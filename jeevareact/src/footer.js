import React from "react";
import './footer.css';
import grandtour from './images/grandtour.png';





function Footer(){
    return(
        <div className="footers">
        <div className="footer">
            <div className="footer1">
                <img src={grandtour} alt="grandtour" />
                <div id="theme">© ThemeGoods Theme</div>
            </div>
            <div className="footer2">
                <h4>Vineyard Vistas: A Day of</h4> 
                    <h4>Wine and Scenic Beauty</h4>


<div className="footer3">
                    <a href="" id="num"><h5>+1 (833) 215 9353</h5></a>
                    <a href="" id="mail"><h5>contact@grandtour.com</h5>
                    </a>
                    <div id="social">
                    <a href=""><b>Instagram</b></a>
                    <a href=""><b>Facebook</b></a>
                    <a href=""><b>Whatsapp</b></a></div>
                    </div>
            </div>
        </div>
        </div>
    )
}
export default Footer;