import React from "react";
import { Fade } from "react-awesome-reveal";

import "../css/home.css";
import "../css/about.css";
import "../css/menu.css";
import "../css/booking.css";
import "../css/contact.css";

import RTJ1 from "../media/collection.jpg";
import RTJ2 from "../media/foodie.jpg";
import RTJ3 from "../media/mock-beef.jpg";
import RTJ4 from "../media/tiramisu.jpg";
import menu1 from "../media/rare-beef.jpg";
import menu2 from "../media/salmon.jpg";
import menu3 from "../media/berries.jpg";
import menu4 from "../media/another-beef.jpg";

export default function Home() {
  const showOrHideDiv1 = () => {
    var x = document.getElementById("showOrHide1");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const showOrHideDiv2 = () => {
    var x = document.getElementById("showOrHide2");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const showOrHideDiv3 = () => {
    var x = document.getElementById("showOrHide3");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const showOrHideDiv4 = () => {
    var x = document.getElementById("showOrHide4");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const showOrHideDiv5 = () => {
    var x = document.getElementById("showOrHide5");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const showOrHideDiv6 = () => {
    var x = document.getElementById("showOrHide6");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const showOrHideDiv7 = () => {
    var x = document.getElementById("showOrHide7");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <div className="">
      <div className="main" id="home">
        <div className="Hcenter">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade direction="up" cascade triggerOnce>
            <p className="Htext1 htext">Dining Experience</p>
            <p className="Htext2 htext">Food land</p>
          </Fade>
        </div>
      </div>

      <div className="Aabout-bg" id="about">
        <div className="container-fluid pt-4">
          <div>
            <Fade triggerOnce>
              <p className="Adash">___________</p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce>
              <p className="Ahead-about">WELCOME TO THE FOOD LAND</p>
            </Fade>
          </div>
          <Fade triggerOnce>
            <p className="Adash">___________</p>
          </Fade>
          <br />
        </div>

        <div className="flex Acolor">
          <div>
            <img src={RTJ1} alt="err" className="Aimg1" />
          </div>
          <div>
            <Fade direction="right" triggerOnce>
              <br />
              <br />
              <br />
              <br />
              <div>
                <p className="Anum">01</p>
                <p className="Atext01">FRESH FOOD FOR EVERYONE, EVERY DAY</p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="flex Acolor">
          <div>
            <Fade direction="left" triggerOnce>
              <div style={{ textAlign: "right" }}>
                <br />
                <br />
                <br />
                <br />
                <p className="Anum">02</p>
                <p className="Atext02">FOOD PREPARATION WITH LOVE AND CARE</p>
              </div>
            </Fade>
          </div>
          <div>
            <img src={RTJ2} alt="err" className="Aimg2" />
          </div>
        </div>

        <div className="flex Acolor">
          <div>
            <img src={RTJ3} alt="err" className="Aimg3" />
          </div>
          <div>
            <Fade direction="right" triggerOnce>
              <br />
              <br />
              <br />
              <br />
              <div>
                <p className="Anum">03</p>
                <p className="Atext03">COOKING WITH PERFECT RESULTS</p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="flex Acolor">
          <div>
            <Fade direction="left" triggerOnce>
              <div style={{ textAlign: "right" }}>
                <br />
                <br />
                <br />
                <br />
                <p className="Anum">04</p>
                <p className="Atext04">FINISH WITH ALL THE FLAVOR AND STYLE</p>
              </div>
            </Fade>
          </div>
          <div>
            <img src={RTJ4} alt="err" className="Aimg4" />
          </div>
        </div>
      </div>

      <div className="Aabout-bg" id="menu">
        <div className="container-fluid pt-4">
          <div className="Mcustom1">
            <Fade triggerOnce>
              <div className="flex">
                <p className="Adash">___________</p>
                <p className="Adash mx-2">Food land</p>
                <p className="Adash">___________</p>
              </div>
            </Fade>
          </div>

          <div className="Mcustom2">
            <Fade triggerOnce>
              <p className="Mhead-about">MENU</p>
            </Fade>
          </div>

          <div className="Mcustom2">
            <div>
              <Fade triggerOnce>
                <div className="flex">
                  <p className="Adash">___________</p>
                  <p className="Adash">___________</p>
                </div>
              </Fade>
            </div>
          </div>
          <br />
          <br />

          <div className="container">
            <div className="flex">
              <div className="column1">
                <div className="flex" onClick={showOrHideDiv1}>
                  <p className="Mmenu">SNACKS</p>
                </div>
                <div
                  id="showOrHide1"
                  className="px-4 pb-4"
                  style={{ display: "none" }}
                >
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                </div>
                <hr />
                <div className="flex" onClick={showOrHideDiv2}>
                  <p className="Mmenu">SOUP</p>
                </div>
                <div
                  id="showOrHide2"
                  className="px-4 pb-4"
                  style={{ display: "none" }}
                >
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                </div>
                <hr />
                <div className="flex" onClick={showOrHideDiv3}>
                  <p className="Mmenu">VEGAN</p>
                </div>
                <div
                  id="showOrHide3"
                  className="px-4 pb-4"
                  style={{ display: "none" }}
                >
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                </div>
                <hr />
                <div className="flex" onClick={showOrHideDiv4}>
                  <p className="Mmenu">FISH</p>
                </div>
                <div
                  id="showOrHide4"
                  className="px-4 pb-4"
                  style={{ display: "none" }}
                >
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                </div>
                <hr className="hr-line" />
                <div className="flex" onClick={showOrHideDiv5}>
                  <p className="Mmenu">MEAT</p>
                </div>
                <div
                  id="showOrHide5"
                  className="px-4 pb-4"
                  style={{ display: "none" }}
                >
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                </div>
                <hr />
                <div className="flex" onClick={showOrHideDiv6}>
                  <p className="Mmenu">DESSERTS</p>
                </div>
                <div
                  id="showOrHide6"
                  className="px-4 pb-4"
                  style={{ display: "none" }}
                >
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                </div>
                <hr />
                <div className="flex" onClick={showOrHideDiv7}>
                  <p className="Mmenu">DRINKS</p>
                </div>
                <div
                  id="showOrHide7"
                  className="px-4 pb-4"
                  style={{ display: "none" }}
                >
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                  <div className="flex jcb">
                    <p className="menu-item">Chicken Wings</p>
                    <p className="menu-price">$15.00</p>
                  </div>
                </div>
              </div>

              <div className="column2 px-3">
                <div className="flex">
                  <div className="column2">
                    <Fade triggerOnce delay={180}>
                      {" "}
                      <div className="outer1">
                        {" "}
                        <img src={menu1} alt="" className="menu-img1" />
                      </div>
                    </Fade>
                  </div>
                  <div className="column2">
                    <Fade triggerOnce delay={200}>
                      <div className="outer2">
                        <img src={menu2} alt="" className="menu-img2" />
                      </div>
                    </Fade>
                  </div>
                </div>
                <div className="flex">
                  <div className="column2">
                    <Fade triggerOnce delay={220}>
                      <div className="outer1">
                        <img src={menu3} alt="" className="menu-img1" />
                      </div>
                    </Fade>
                  </div>
                  <div className="column2">
                    <Fade triggerOnce delay={240}>
                      <div className="outer2">
                        <img src={menu4} alt="" className="menu-img2" />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <div className="Cpt" id="contact">
          <p className="Ccontact-us">Address</p>
          <p className="Caddr1">Roi Et Street, Blue Building</p>
          <br />
          <p className="Caddr2">45254-11 Roi Et City</p>

          <div className="flex Cjustify">
            <p className="num2">mail</p>
            <p className="mail">hello@aaa.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
