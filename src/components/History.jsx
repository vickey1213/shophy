import React from "react";
import "./History.css";
import Logo from "../Assest/logo.png";
import BrandText from "../Assest/brandText.png";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../Assest/carouselImage1.png"
import Image2 from "../Assest/carouselImage2.png"
const History = () => {
  return (
    <>
      <div className="mainHistory">
        <div className="container">
          <img src={Logo} alt="" />
          <img src={BrandText} alt="" className="text" />
        </div>
        <div className="link">
          <Link to="/history" style={{ color: "black" }}>
            01.History
          </Link>
          <Link to="/team" style={{ color: "black" }}>
            02.Team
          </Link>
        </div>
      </div>
      <div className="para">
       <div className="htext">
       <h1> 01 Histroy</h1>
        <p>

          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do
          eiusmod tempor incididunt ut labore <br />et dolore magna aliqua.
           Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br />
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse<br /> cillum dolore eu fugiat nulla
          pariatur. 
        </p>
       </div>
       <Carousel className="carousel">
                <div>
                    <img src={Image1} />
                </div>
                <div>
                    <img src={Image2} />
                </div>
                <div>
                    <img src={Image1} />
                </div>
     </Carousel>
      </div>
     
    </>
  );
};

export default History;
