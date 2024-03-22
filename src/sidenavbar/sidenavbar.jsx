import "./sidenavbar.css";
import sumitwo from "../assets/sumi2.png";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaAlignJustify } from "react-icons/fa";
import React, { useEffect } from "react";
import resume from "../assets/resume.pdf";
import About from "../about/About";
import Myskills from "../skills/Myskills";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faAddressCard,
  faBookOpenReader,
  faGraduationCap,
  faSquarePollVertical,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Education from "../education/Education";
import Portfolio from "../portfolio/Portfolio";
import Countact from "../contact/Countact";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashLink as Link } from "react-router-hash-link";
import ScrollToTop from "react-scroll-to-top";

export default function Sidenavbar() {
  const [type] = useTypewriter({
    words: ["Frond End Developer", "Web Designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 3,
  });
  useEffect(() => {
    const button = document.querySelector(".button");
    button.addEventListener("click", (e) => {
      e.preventDefault;
      button.classList.add("animate");
      setTimeout(() => {
        button.classList.remove("animate");
      }, 600);
    });
  });
  useEffect(() => {
    const mybutton = document.querySelector(".mybutton");
    mybutton.addEventListener("click", (e) => {
      e.preventDefault;
      mybutton.classList.add("animate");
      setTimeout(() => {
        mybutton.classList.remove("animate");
      }, 600);
    });
  });

  useEffect(() => {
    AOS.init({ duration: 2000, delay:5});
  }, []);

  // usign the navbar canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        {/* top Navbar start */}
        <div className=" row sticky-top  d-lg-none bg-white">
          <div className="d-flex pt-2 pb-2 d-flex justify-content-between navhead">
            <div className="fs-3 fw-medium">Sumithra</div>
            <div className="fs-3 medium">
              <span onClick={handleShow}>
                <FaAlignJustify />
              </span>
            </div>
          </div>
          <Offcanvas
            show={show}
            onHide={handleClose}
            className="offcanhead m-0 p-1"
          >
            <Offcanvas.Header closeButton className="">
              <Offcanvas.Title>Sumithra</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <div className="d-flex justify-content-center">
                <div className="imgdiv">
                  <img
                    src={sumitwo}
                    className="img-fluid"
                    style={{ borderRadius: "50%" }}
                  ></img>
                </div>
              </div>
              <div>
                {/* Nav bady */}
                <div>
                  <nav className="nav flex-column text-white mt-5">
                    <Link to="#home" className="text-decoration-none">
                      <a className="nav-link active w-100" aria-current="page">
                        <div className="d-flex justify-content-between fs-6">
                          <div> Home</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon icon={faHouseUser} size="sm" />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#about" className="text-decoration-none">
                      <a className="nav-link" aria-current="page">
                        <div className="d-flex justify-content-between fs-6">
                          <div>About</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon icon={faAddressCard} size="sm" />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#skill" className="text-decoration-none">
                      <a className="nav-link" aria-current="page">
                        <div className="d-flex justify-content-between fs-6">
                          <div> Skills </div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon
                              icon={faBookOpenReader}
                              size="sm"
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#education" className="text-decoration-none">
                      <a className="nav-link" aria-current="page">
                        <div className="d-flex justify-content-between fs-6">
                          <div>Education</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon icon={faGraduationCap} size="sm" />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#portfolio" className="text-decoration-none">
                      <a className="nav-link" aria-current="page" href="#">
                        <div className="d-flex justify-content-between fs-6">
                          <div className="naver">Portfolio</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon
                              icon={faSquarePollVertical}
                              size="sm"
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#contact" className="text-decoration-none">
                      <a className="nav-link" aria-current="page" href="#">
                        <div className="d-flex justify-content-between fs-6">
                          <div>Contact Me</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon icon={faEnvelope} size="sm" />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
                {/* Nav food */}
                <div className="navfoot d-flex">
                  <div className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/sumithrafrontenddeveloper/"
                      className="text-white"
                    >
                      <RiLinkedinLine />
                    </a>
                  </div>
                  <div className="github">
                    <a
                      href="https://github.com/Sumithra-1011"
                      className="text-white"
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        {/* top Navbar end */}

        {/* side Navbar start */}
        <div className="row d-flex align-items-start">
          {/* Navcontend start */}
          <div className="col-lg-4 col-xl-3  sidebar sticky-top d-none d-lg-block p-0">
            {/* Nav head */}
            <div className="d-flex justify-content-center">
              <div className="imgdiv">
                <img src={sumitwo} className="img-fluid"></img>
              </div>
            </div>

            {/* Nav bady */}
            <div>
              <nav className="nav flex-column text-white mt-5">
                <Link to="#home" className="text-decoration-none">
                  <a className="nav-link active" aria-current="page">
                    <div className="d-flex justify-content-between">
                      <div> Home</div>
                      <div className=" navicon">
                        <FontAwesomeIcon icon={faHouseUser} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link to="#about" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#">
                    <div className="d-flex justify-content-between ">
                      <div>About</div>
                      <div className=" navicon">
                        <FontAwesomeIcon icon={faAddressCard} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link to="#skill" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#">
                    <div className="d-flex justify-content-between ">
                      <div> Skills </div>
                      <div className="navicon">
                        <FontAwesomeIcon icon={faBookOpenReader} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>

                <Link to="#education" className="text-decoration-none">
                  <a className="nav-link" aria-current="page">
                    <div className="d-flex justify-content-between ">
                      <div>Education</div>
                      <div className="navicon">
                        <FontAwesomeIcon icon={faGraduationCap} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link to="#portfolio" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#">
                    <div className="d-flex justify-content-between ">
                      <div className="naver">Portfolio</div>
                      <div className="navicon">
                        <FontAwesomeIcon
                          icon={faSquarePollVertical}
                          size="sm"
                        />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link to="#contact" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#">
                    <div className="d-flex justify-content-between ">
                      <div>Contact Me</div>
                      <div className="navicon">
                        <FontAwesomeIcon icon={faEnvelope} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>
              </nav>
            </div>
            {/* Nav food */}

            <div className="navfoot d-flex">
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/sumithrafrontenddeveloper/"
                  className="text-white"
                >
                  <RiLinkedinLine />
                </a>
              </div>
              <div className="github">
                <a
                  href="https://github.com/Sumithra-1011"
                  className="text-white"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
          {/* Navcontend end */}

          {/* Navcontend Main start */}
          <div className="col-lg-7 p-0 ms-lg-5 mt-3" id="home">
            <div className=" row namecontainer w-100 m-0 item">
              <div class=" wrapper">
                <div className="text-white d-flex justify-content-center flex-column aligin-item-center mt-5">
                  <h2
                    className="display-5 w-100 text-center mb-3"
                    style={{ color: "#00B87B", fontWeight: "600" }}
                  >
                    HI, I'M SUMITHRA
                  </h2>
                  <div className=" mx-auto text-center text-white">
                    <h5 style={{ color: "goldenrod" }}>
                      {type}
                      <span>
                        <Cursor cursorStyle="|" />
                      </span>
                    </h5>

                    {/* <span className="one">Front End Developer</span> */}
                  </div>

                  <b className=" mt-3 text-center para ps-md-5 pe-md-5 ps-1 pe-e summary">
                    A front-end focused web developer dedicated to crafting
                    seamless user experiences. Passionate about leveraging
                    design and technology to create engaging websites
                  </b>
                  <div>
                    <div className="d-flex justify-content-center  aligin-item-center  mt-5 mb-4 flex-column flex-sm-row">
                      <div className="topbtn">
                        <button class="button me-sm-4 mb-4 mb-sm-0">
                          <a href={resume} download="resume">
                            Download CV
                          </a>
                        </button>
                        <Link to="#contact" className="text-underline-none">
                          <button className="mybutton ">Contact Me</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ******** About start ********* */}
            <div
              className="row ms-0 me-0 mt-5 mb-5 p-3 p-sm-5 item"
              id="about"
              data-aos="zoom-in"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <About />
            </div>
            {/* ******** About End ********* */}

            {/* ******* Skills start ******* */}
            <div
              className="row ms-0 me-0 mt-5 mb-5 p-sm-5 item"
              id="skill"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <Myskills />
            </div>
            {/* ****** SKills End ********* */}

            {/* ******* Education start ******* */}
            <div
              className="row ms-0 me-0 mt-5 mb-5 p-sm-5 item "
              id="education"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <Education />
            </div>
            {/* ****** Education end ********** */}

            {/* ******* My portfolio start ******* */}
            <div
              className="row ms-0 me-0 mt-5 mb-5 p-sm-5 item "
              id="portfolio"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <Portfolio />
              {/* <Cardd/> */}
            </div>
            {/* ****** My Portfolio end ********** */}

            {/* ******* Countact Us start ************ */}
            <div
              className="row ms-0 me-0 mt-5 mb-2 p-sm-5 item"
              id="contact"
              data-aos="zoom-in-down"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <Countact />
            </div>
            {/* ******* Countact Us end ************** */}
            <div>
              <ScrollToTop
                smooth="true"
                top="700"
                className="scroll"
                width="35"
                height="20"
                color="white"
              />
            </div>
          </div>
          {/* Navcontend Main end */}
        </div>
        {/* side Navbar end*/}
      </div>
    </>
  );
}
