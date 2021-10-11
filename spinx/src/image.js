import React from "react";
import img0 from "./images/img0.png"
import './images.css'
import 'animate.css'

function Images(){
    return(
        <div>
            <div className="contactbar">
                <p className="row">(213) 894-9933  |   hello@spinxdigital.com</p>
            </div>
            <div className="container">
            <img src={img0} alt="web dev team" className="responsive"/>
                <div className="top-right">
                    <h1 className="animate__animated animate__slideInRight">
                        BIG IDEAS,
                        <br />
                        CREATIVE PEOPLE,
                        <br />
                        NEW TECHNOLOGY.
                    </h1>
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
}

export default Images;