import React from "react";
import ReactDOM from "react-dom";
import sample from "/Users/jordancarroll/Desktop/the wander/wander/src/images/homepage_2.309ee28e (1).mp4";

export default function NavBar() {
  return (
    <div className="Navigation">
      <video className="backgroundvideo" loop muted autoPlay>
        <source src={sample} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <navbar>
        <div className="nav">
          <h2>Wanderers</h2>
          <p className="navwords">Roadmap</p>
          <p className="navwords">Merch</p>
          <button className="button">WanderFM</button>
          <button className="button2">OpenSea</button>
        </div>
      </navbar>
      <div className="heroText">
        <h1>THE GREATEST STORY IN THE METAVERSE</h1>
        <p>-</p>
        <h1>AND YOUVE GOT A LEAD ROLE.</h1>
        <button className="buttonNav">Start Your Journey Now</button>
      </div>
    </div>
  );
}
