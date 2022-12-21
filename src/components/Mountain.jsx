import React from "react";
import "./Mountain.css";
import Logo from "../Assest/brandText.png";
import tree from "../Assest/logo.png";
import { Link } from "react-router-dom";

const Mountain = () => {
  return (
    <div className="mountain">
       <header className="mainTree">
        <div className="logoimg">
          <img src={tree} alt="" className="tree" />
        </div>
        <div className="link">
          <Link to="history" style={{color:"aliceblue"}}>01.History</Link>
          <Link to="team" style={{color:"aliceblue"}}>02.Team</Link>
        </div>
      </header>
      <div className="mainLogo">
        <img src={Logo} alt="" className="logo" />
      </div>
    </div>
  );
};

export default Mountain;
