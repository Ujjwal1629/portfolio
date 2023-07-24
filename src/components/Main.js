import React from "react";
import "./Main.css";
import loop from "../video/LOOP.png";
import "../App.css";

export default function Main() {
  return (
    <div className="main_page">
      <div className="main_content">
        <p>Ujjwal Singh</p>
        <span>FULL STACK</span>
        <span>WEB</span>
        <span>DEVELOPER</span>
        <div className="main_circle">
          <img src={loop} alt="" />
        </div>
      </div>
    </div>
  );
}
