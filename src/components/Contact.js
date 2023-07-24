import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Connect...</h1>
      <p>
        "Unlock Success: <strong style={{ color: "#ff5f1f" }}>Hire Me,</strong>{" "}
        <br /> Your <strong style={{ color: "#ff5f1f" }}>Key </strong>to
        Excellence!"
      </p>
      <div className="contact_links">
        <div className="links">
          <div className="email">
            <h2>Email</h2>
            <a href="mailto: ujjwalsingh1629@gmail.com">UjjwalSingh1629</a>
          </div>
          <div className="linkedin">
            <h2>Linked in</h2>
            <a
              href="https://www.linkedin.com/in/ujjwal-singh-71b908278/"
              target="_blank"
            >
              Connect Now!
            </a>
          </div>
          <div className="instagram">
            <h2>Instagram</h2>
            <a href="https://www.instagram.com/hunnychaharr/">
              DM me a cool meme
            </a>
          </div>
          <div className="github">
            <h2>Github</h2>
            <a href="https://github.com/Ujjwal1629" target="_blank">
              Let's Code together!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
