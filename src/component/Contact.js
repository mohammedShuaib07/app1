import React from "react";
import { Link } from "react-router-dom";
import gif3 from "../image/sub-gif-unscreen.gif";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="Contactpage">
        <div className="contacthead">
          <div className="contact">
            <div className="backbtn">
              <Link to={"/"}>
                <i class="fa-solid fa-arrow-left"></i>
              </Link>
            </div>
            <div className="Contactheading">
            <h1>CONTACT INFO</h1>
          </div>
          </div>
         
        </div>
        <div className="contactflex">
          <div className="gif3">
            <div className="contactgif">
              <img src={gif3} />
            </div>
          </div>
          <div className="input">
            <div id="num">
              <div class="form__group field">
                <input
                  required=""
                  placeholder="Name"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="name">
                  Name
                </label>
              </div>

              <div class="form__group field">
                <input
                  required=""
                  placeholder="Email"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="name">
                  E-mail
                </label>
              </div>

              <div class="form__group field">
                <input
                  required=""
                  placeholder="Name"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="name">
                  Phone Number
                </label>
              </div>

              <div class="form__group field">
                <textarea
                  name=""
                  cols="60"
                  rows="8"
                  class="form__field"
                ></textarea>
                <label class="form__label" for="name">
                  Message
                </label>
              </div>

              <div id="btn-io">
                <button> Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
