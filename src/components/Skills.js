import React from "react";
import "./Skills.css";
import html from "../video/html.png";
import css from "../video/css.png";
import tailwind from "../video/tailwind.png";
import js from "../video/js.png";
import ts from "../video/ts.png";
import jquery from "../video/jquery.png";
import mongo from "../video/mongodb.png";
import mysql from "../video/sql.png";
import node from "../video/nodejs.png";
import express from "../video/expjs.png";
import react from "../video/reactjs.png";
import next from "../video/nextjs.png";
import ui from "../video/ui.png";
import py from "../video/py.png";
import git from "../video/git.png";
import c from "../video/c.png";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Skills() {
  return (
    <ParallaxProvider translateY={[-20, 20]}>
      <div className="skills_tab">
        <div className="skill_heading">
          <h1>
            <strong style={{ color: "#fff" }}>My</strong> Super
            <strong style={{ color: "#fff" }}>Powers...</strong>
          </h1>
        </div>
        <div className="skills_content">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={tailwind} alt="" />
          <img src={js} alt="" />
          <img src={ts} alt="" />
          <img src={jquery} alt="" />
          <img src={mongo} alt="" />
          <img src={mysql} alt="" />
          <img src={node} alt="" />
          <img src={express} alt="" />
          <img src={react} alt="" />
          <img src={next} alt="" />
          <img src={ui} alt="" />
          <img src={py} alt="" />
          <img src={git} alt="" />
          <img src={c} alt="" />
        </div>
      </div>
    </ParallaxProvider>
  );
}
