import React from "react";
import { Link } from "react-router-dom";
import gif2 from "../image/output-onlinegiftools (5).gif";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="Aboutpage">
        <div className="aboutnav">
          <div className="btn">
            <Link to={"/"}>
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div className="Heading">
            <h1>About us</h1>
          </div>
        </div>
        <div className="Aboutflex">
          <div className="Aboutus">
            <div className="Aboutme">
              <h2>Let's Introduce myself</h2>
              <p>
                A passionate Developer with self learning Curious of learning
                new skills by giving extra flavour in my daily routine life and
                always have an ambitious to work in IT industry
              </p>
              <p>
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some of my work in the Projects section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming
              </p>
            </div>
            <div className="skill">
              <h1>Skill</h1>
              <div id="btnskill">
                <button>HTML 5</button>
                <button>CSS</button>
                <button>BOOTSTRAP 5</button>
              </div>
              <div id="btnskill1">
                <button>JAVA SCRIPT</button>
                <button>REACT JS</button>
              </div>
            </div>
          </div>
          <div className="gif2">
            <div className="Aboutgif">
              <img src={gif2} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
