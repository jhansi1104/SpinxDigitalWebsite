import React from "react";
import img0 from "./images/img0.png"
import './images.css'
import 'animate.css'

function Images(){
    return(
        <div>
            <div className="container">
            <div className="contactbar">
             <p className="row">(213) 894-9933  |   hello@spinxdigital.com</p>
            </div>
            <img src={img0} alt="web dev team" style={{"width": "100%" , "height": "auto"}}/>
            <div class="top-left">
                <h1 className="animate__animated animate__slideInLeft">
                    BIG IDEAS, 
                    <br/>
                    CREATIVE PEOPLE, 
                    <br/>
                    NEW TECHNOLOGY.
                </h1>
            </div>
            </div>
        </div>
    );
}

export default Images;