import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Components/NavBar";
import "./StyleSheets/Style.css";
import Box from "./Components/Hero";
import BoxTwo from "./Components/HeroTwo";
import Team from "./Components/Team";
import Scrolling from "./Components/Scrolling";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="container">
      <React.StrictMode>
        <NavBar />
        <Box />
        <BoxTwo />
        <Team />
        <Scrolling />
        <Footer />
      </React.StrictMode>
    </div>
  );
}
