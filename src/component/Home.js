import React from "react";
import { Link } from "react-router-dom";
import gif1 from "../image/output-onlinegiftools (1).gif";
import pdf from "../../src/image/shuaib 6 resume.pdf";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="Homepage">
        <div className="Navbar">
          <nav>
            <Link to={"/"}>
              <i class="far fa-user"></i>
            </Link>
            <Link to={"/About"}>
              <i class="fas fa-briefcase"></i>
            </Link>
            <Link to={"/Project"}>
              <i class="far fa-file"></i>
            </Link>
            <Link to={"/Contact"}>
              <i class="far fa-address-card"></i>
            </Link>
          </nav>
        </div>
        <div className="page">
          <div className="About">
            <div className="name">
              <h1>Hello,</h1>
              <h1>My Name is</h1>
              <h1>Mohammed shuaib</h1>
              <br></br>
              <p className="para">
                A passionate Developer with self learning Curious of learning
                new skills by giving extra flavour in my daily routine life and
                always have an ambitious to work in IT industry
              </p>
              <br></br>
              <div className="btnhome">
                <a href={pdf} >
                  <button class="btn"> Resume</button>
                </a>
              </div>
            </div>
          </div>
          <div className="Gif">
            <div className="icon">
              <Link to={"https://github.com/mohammedShuaib07"}>
                <i class="fa-brands fa-github"></i>
              </Link>
              <Link
                to={"https://www.linkedin.com/in/mohammed-shuaib-bb825b247/"}
              >
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link to={"mailto:mohammedshuaibb45@gmail.com"}>
                <i class="fa-solid fa-envelope"></i>
              </Link>
              {/* <Link to={"https://www.instagram.com/"}> */}
              <i class="fa-brands fa-instagram"></i>
              {/* </Link> */}
            </div>
            <div className="img">
              <img src={gif1} />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
