import React from "react";
import "./Project2.css";
import simon from "../video/simon.png";
import pig from "../video/pig.png";
import guess from "../video/guess.png";
import dice from "../video/dice.png";

export default function Project2() {
  return (
    <div className="fun">
      <div className="fun_head">
        <h1>Take a Break and Challenge Yourself</h1>
        <p>Some Games i coded...</p>
      </div>
      <div className="fun_content">
        <div className="fun_games">
          <h2>Simon Game🎮</h2>
          <p>Let's see how far can you go..</p>
          <button>
            <a href="https://ujjwal1629.github.io/SimonGame/ " target="_blank">
              Play now
            </a>
          </button>
          <img src={simon} alt="" />
        </div>
        <div className="fun_games">
          <h2>Dice Game🎮</h2>
          <p>Hope you'll beat the random function</p>
          <button>
            <a href="https://github.com/Ujjwal1629/DiceGame" target="_blank">
              Play now
            </a>
          </button>
          <img src={dice} alt="" />
        </div>
        <div className="fun_games">
          <h2>Pig Game🎮</h2>
          <p>It's not all about mud🐷</p>
          <button>
            <a href="https://ujjwal1629.github.io/PigGame/ " target="_blank">
              Play now
            </a>
          </button>
          <img src={pig} alt="" />
        </div>
        <div className="fun_games">
          <h2>Guess the number🎮</h2>
          <p>Not an easy one</p>
          <button>
            <a
              href="https://ujjwal1629.github.io/GuessNumber/ "
              target="_blank"
            >
              Play now
            </a>
          </button>
          <img src={guess} alt="" />
        </div>
      </div>
    </div>
  );
}
