import React from "react";
import "./About.css";
// import photo from "../video/footimg.png";

export default function About() {
  return (
    <div className="aboutMain">
      <div className="about">
        <div className="about_head">
          {/* <img src={photo} alt="" /> */}
          <h1>About me...</h1>
        </div>
        <div className="about_content">
          <p>
            "I'am the grooviest{" "}
            <strong style={{ color: "#ff5f1f" }}>web developer</strong> in town,
            with fingers that dance across keyboards and code that sings in
            <strong style={{ color: "#383838" }}> perfect harmony.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
