import React from "react";
import ReactDOM from "react-dom";
import teamOne from "/Users/jordancarroll/Desktop/the wander/wander/src/images/niz.73475672.png";
import teamTwo from "/Users/jordancarroll/Desktop/the wander/wander/src/images/emerald.46cced37.png";

export default function Team() {
  return (
    <div className="cont">
      <p className="founder">Founders</p>
      <div className="cardsbox">
        <div className="card">
          <img src={teamOne} width={300}></img>
          <h1>NICK</h1>
          <p>Animation & Design @nickkyboy</p>
        </div>
        <div className="cardTwo">
          <img src={teamTwo} width={300}></img>
          <h1>EMERALD</h1>
          <p>Program & Design @Emerald</p>
        </div>
        <div className="fullTeam">
          <h1>View Full Team</h1>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
