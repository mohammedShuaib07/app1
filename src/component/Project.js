import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import projectdata from "./ProjectData";

const Project = () => {
  return (
    <>
      <div className="Projectpage">
        <div className="projectnav">
          <div className="back">
            <Link to={"/"}>
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div className="headingproj" >
            <h1 >PROJECTS</h1>
          </div>
        </div>

        <div className="projects">
          {projectdata.carddata.map((item, index) => {
            return (
              <div className="Tasksection" key={index}>
                <div className="task">
                  <div className="image">
                    <img src={item.img} />
                  </div>
                  <div className="description">
                    <div className="content">
                      <h2>{item.task}</h2>
                      <h1>{item.title}</h1>
                      <p>{item.para}</p>
                      <div id="btntask">
                        <Link to={item.link}>
                          <button> Click</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
