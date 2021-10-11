import React from "react"; 
import {Carousel} from "react-bootstrap";
import './carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'

class BootstrapCarousel extends React.Component{
    render(){
        return(
            <div >
                <Carousel className="carousel" style={{"position": "center"}}>
                <Carousel.Item>
                   <img src={img2} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                <img src={img3}  alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                   <img  src={img4}  alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                   <img  src={img5} alt="Fourth slide" />
                </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default BootstrapCarousel

