import React from "react";
import ReactDOM from "react-dom";
import pic from "/Users/jordancarroll/Desktop/the wander/wander/src/images/planet.f45eeff8.mp4";

export default function BoxTwo() {
  return (
    <div className="boxOne">
      <div className="insideBoxTwo">
        <div className="cardWords">
          <h1 className="mainTwo">
            Welcome to your Intergalactic Travel Agency
          </h1>
          <p className="heroMain">
            Manage planets, earn ETH. Visit planets earn Stardust. Explore an
            evolving galaxy, collecting stamps and flexing your passport.
            Planets, stamps, and passports are all tradable NFTs.
          </p>
          <button className="button">WanderFM</button>
        </div>
        <div className="vid">
          <video className="cardVid" loop muted autoPlay width={550}>
            <source src={pic} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
