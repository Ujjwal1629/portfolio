import { useEffect, useState } from "react";
import "./App.css";
import logo1 from "./video/logo1.png";
import video from "./video/bg.mp4";
import { motion } from "framer-motion";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";
import loop from "./video/LOOP.png";
import Project2 from "./components/Project2";
// import Scroll from "./SmoothScroll";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      transition: {
        easeInOut: "linear-in-out",
      },
    },
    text: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
      width: 400,
      height: 400,
      backgroundColor: "#fff",
      transition: {
        easeInOut: "linear-in-out",
      },
    },
  };
  const textEnter = () => {
    setCursorVariant("text");
  };
  const textLeave = () => {
    setCursorVariant("default");
  };
  return (
    <div className="App" id="App">
      {loading ? (
        <div class="loader">
          <div class="loading">
            <div class="loading__letter">G</div>
            <div class="loading__letter">r</div>
            <div class="loading__letter">o</div>
            <div class="loading__letter">o</div>
            <div class="loading__letter">v</div>
            <div class="loading__letter">y</div>
            <div class="loading__letter">-</div>
            <div class="loading__letter">i</div>
            <div class="loading__letter">n</div>
            <div class="loading__letter">g</div>
          </div>
        </div>
      ) : (
        <div>
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          />
          <div className="container">
            <section className="navbar">
              <div className="nav">
                <div className="nav_name">
                  <img src={logo1} alt="" />
                </div>
                <div
                  className="nav_content"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <h1>
                    <a
                      href="https://www.linkedin.com/resume-builder/insights/urn:li:digitalmediaAsset:D4D25AQFc5gbiONkxmA/?resumeAmbryUrn=%2FAAYEAgC1AAgAAQAAAAAAAGJapq_RhZrxTRCEK46kMZ_ccw.pdf&resumeName=Ujjwal%20Singh%20Resume.pdf-3.pdf&resumeNew=true"
                      target="_blank"
                    >
                      Resume
                    </a>
                  </h1>
                  <h1>
                    <a href="#Projects">Projects</a>
                  </h1>
                  <h1>
                    <a href="#Contact">Contact</a>
                  </h1>
                </div>
              </div>
              <video loop autoPlay muted>
                <source src={video} type="video/mp4" />
              </video>

              {/* MAIN PAGE */}
              <div className="main_page">
                <div className="main_content">
                  <p>Ujjwal Singh</p>
                  <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    FULL STACK
                    <br />
                    WEB <br />
                  </h1>
                  <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    DEVELOPER
                  </span>
                  <div className="main_circle">
                    <img src={loop} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section id="About">
            <div className="aboutMain">
              <div className="about">
                <div className="about_head">
                  {/* <img src={photo} alt="" /> */}
                  <h1>About me...</h1>
                </div>
                <div className="about_content">
                  <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    "I'am the grooviest{" "}
                    <strong style={{ color: "#ff5f1f" }}>web developer</strong>{" "}
                    in town, with fingers that dance across keyboards and code
                    that sings in
                    <strong style={{ color: "#383838" }}>
                      {" "}
                      perfect harmony.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="Skills">
            <Skills />
          </section>
          <section id="Projects">
            <Project />
          </section>
          <section id="Fun">
            <Project2 />
          </section>
          <section id="Contact">
            <Contact />
          </section>
          <section id="Footer">
            <Footer />
          </section>
          <div className="rights">
            <h1>Designed and Developed by Ujjwal Singh</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
