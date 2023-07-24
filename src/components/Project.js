import React from "react";
import "./Project.css";
import netflix from "../video/netflix.gif";
import google from "../video/googleshop.gif";
import go from "../video/go.png";
import cdphone from "../video/cdphone.png";
import bank from "../video/bank.png";
import linkedin from "../video/linkedin.gif";
export default function Project() {
  return (
    <div className="project">
      <div className="head">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <div className="project_content">
          <div className="contents">
            <h1>Netflix Clone</h1>
            <p>
              I developed a captivating Netflix-inspired website from scratch,
              offering a vast library of on-demand movies, TV shows, and
              documentaries. Implementing a user-friendly interface, seamless
              navigation, users can enjoy a smooth streaming experience. Robust
              backend and secure payment integration ensure top-notch
              performance and convenience for all movie enthusiasts.
              <br />
              <br />
              <strong>
                Tech Stack- ReactJS, Tailwind CSS, Firebase, Stripe, Redux
              </strong>
            </p>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/Ujjwal1629/Netflix-clone "
                  target="_blank"
                >
                  Github
                </a>
              </button>
              <button>
                <a href="https://netflix-clone-40569.web.app " target="_blank">
                  Try Now
                </a>
              </button>
            </div>
          </div>
          <img src={netflix} alt="" />
        </div>
      </div>
      <div className="projects">
        <div className="project_content">
          <div className="contents">
            <h1>Google Shopping Clone</h1>
            <p>
              I developed a captivating Google Shopping clone website,
              delivering a comprehensive online shopping experience. With an
              intuitive search engine, advanced filters, and real-time product
              updates, users can effortlessly discover and compare a wide range
              of products.
              <br />
              <br />
              <strong>
                Tech Stack- NextJS, ReactJS, Redux, Tailwind CSS, Typescript
              </strong>
            </p>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/Ujjwal1629/GoogleShoppingClone"
                  target="_blank"
                >
                  Github
                </a>
              </button>
              <button>
                <a
                  href="https://googleshop-clone-oxxq3he89-ujjwal1629.vercel.app "
                  target="_blank"
                >
                  Try Now
                </a>
              </button>
            </div>
          </div>
          <img src={google} alt="" />
        </div>
      </div>
      <div className="projects">
        <div className="project_content">
          <div className="contents">
            <h1>Gadi-Owner Website (Intern Work)</h1>
            <p>
              During my internship, I skillfully designed and developed a
              cutting-edge website, blending creativity and technical
              proficiency. Employing HTML, CSS, and JavaScript, I crafted an
              engaging user interface and integrated backend functionalities.
              Collaborating with the team, I conducted rigorous testing and
              iterated on feedback to ensure a seamless user experience.
              <br />
              <br />
              <strong>Tech Stack- Hmtl, CSS, Javascript, jQuery</strong>
            </p>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/Ujjwal1629/Intern-work"
                  target="_blank"
                >
                  Github
                </a>
              </button>
              <button>
                <a
                  href="https://ujjwal1629.github.io/Intern-work/"
                  target="_blank"
                >
                  Try Now
                </a>
              </button>
            </div>
          </div>
          <img src={go} alt="" />
        </div>
      </div>
      <div className="projects">
        <div className="project_content">
          <div className="contents">
            <h1>Linked In Clone</h1>
            <p>
              I developed powerful LinkedIn clone website. Utilizing the latest
              web technologies, including React and Node.js, I designed a
              user-friendly platform that fosters professional networking and
              career growth. Secure authentication, personalized profiles.
              <br />
              <br />
              <strong>
                Tech Stack- ReactJS, Redux, Firebase, Authentication
              </strong>
            </p>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/Ujjwal1629/LinkedinClone "
                  target="_blank"
                >
                  Github
                </a>
              </button>
              <button>
                <a href="https://linkedin-clone-us.web.app " target="_blank">
                  Try Now
                </a>
              </button>
            </div>
          </div>
          <img src={linkedin} alt="" />
        </div>
      </div>
      <div className="projects">
        <div className="project_content">
          <div className="contents">
            <h1>Bank Website Design</h1>
            <p>
              I creatively crafted a dynamic website from scratch using HTML,
              CSS, and JavaScript. By blending aesthetics with responsiveness, I
              ensured an engaging user experience across devices. Implementing
              interactive elements and animations, I enriched user interactions.
              Meticulously optimizing performance and cross-browser
              compatibility, the website seamlessly delivers content and
              functionality.
              <br />
              <br />
              <strong>Tech Stack- Html, CSS, Javascript</strong>
            </p>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/Ujjwal1629/Bank-web-template-design "
                  target="_blank"
                >
                  Github
                </a>
              </button>
              <button>
                <a
                  href="https://ujjwal1629.github.io/Bank-web-template-design/"
                  target="_blank"
                >
                  Try Now
                </a>
              </button>
            </div>
          </div>
          <img src={bank} alt="" />
        </div>
      </div>
      <div className="projects">
        <div className="project_content">
          <div className="contents">
            <h1>CodePhone Website Design</h1>
            <p>
              With expertise in HTML and CSS, I developed an impressive website
              showcasing a captivating design and seamless user interface.
              Employing CSS for layout and styling, I ensured a visually
              appealing and responsive platform across devices. The website
              effectively delivers content, creating an enjoyable and
              informative experience for visitors.
              <br />
              <br />
              <strong>Tech Stack- Html, CSS</strong>
            </p>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/Ujjwal1629/CodePhone/tree/index.html"
                  target="_blank"
                >
                  Github
                </a>
              </button>
              <button>
                <a
                  href="https://ujjwal1629.github.io/CodePhone/"
                  target="_blank"
                >
                  Try Now
                </a>
              </button>
            </div>
          </div>
          <img src={cdphone} alt="" />
        </div>
      </div>
    </div>
  );
}
