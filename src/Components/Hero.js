import React from "react";
import ReactDOM from "react-dom";
import pic from "/Users/jordancarroll/Desktop/the wander/wander/src/images/wandermontage.dd63b6b3.mp4";

export default function Box() {
  return (
    <div className="boxOne">
      <div className="insideBox">
        <div className="cardWords">
          <p className="about">About</p>
          <h1>YOUR OWN UNIQUE GALACTIC ADVENTURE</h1>
          <p className="heroMain">
            Each Wanderer is a unique looping animated galactic adventure from
            hundreds of possible attributes and rarities - including music.
          </p>
          <p className="heroMain">
            There are over a quadrillion possible combinations. The Wanderers
            are stored as ERC-721 tokens on the Ethereum blockchain and hosted
            on IPFS. There are only 8,888 Wanderers in existence.
          </p>
          <button className="button">WanderFM</button>
          <button className="button2">OpenSea</button>
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
