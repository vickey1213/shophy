import React from "react";
import './Team.css'
import bg from "../Assest/image3.png";

const Team = () => {
  return (
    <>
      <div className="header">
        <h1 className="text">02.<span className="sub-text">CLIMB</span></h1>
        <p className="paragraph">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in <br />
          a piece of classical Latin  literature from 45 BC.
        </p>
      </div>

      <div className="mount">
        <h3 className="mount1">MOUNTAIN 1</h3>
        <h3 className="mount2">MOUNTAIN 2 </h3>
      </div>
      <div className="">
        <img src={bg} alt="" />
        <div  className="background">
          <h3 className="sSHEDULE">SHEUDLE</h3>
          <div className="shedule">
              <div>
              <p>25 Nov 2016</p>
            <p>28 Nov 2016</p>
            <p>18 Dec 2016</p>
            <p> 7 Jan 2017</p>
            </div>
            <div>
              <p>Vestibbulam Vivrra</p>
              <p>Vestibbulam Vivrra</p>
              <p>Vestibbulam Vivrra</p>
              <p>Vestibbulam Vivrra</p>
            
              </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Team;
