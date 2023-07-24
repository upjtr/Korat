import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Css/navbar.css";
import Rmutilogo from "../assets/image/rmutilogo.png";
import Logo from "../assets/image/logo.png";
import { Link, useLocation } from "react-router-dom";
import { BsList, BsFillCaretDownFill } from "react-icons/bs";
function Header() {
  const location = useLocation();
  const path = location?.pathname;
  console.log("path", path);
  const [navclass, setnavclass] = useState("nav-main");
  const [isShow, setisShow] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 50 ? setnavclass("nav-scroll") : setnavclass("nav-main");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    setisShow(false);
  }, [path]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className={`py-2 ${navclass}`}
      // className={`py-2 ${
      //   path === "/" || path === "/Rice" ? navclass : "nav-scroll"
      // }`}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="flex items-center">
            <img className="rmuti" src={Rmutilogo} />
            <img className="surin" src={Logo} />
          </Link>
        </Navbar.Brand>
        <button onClick={() => setisShow(!isShow)} className="button-bar">
          <BsList className="text-2xl text-black" />
        </button>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`justify-end ${isShow ? "show" : ""}`}
        >
          <Nav>
            <Link to="/" className="nav-link">
              หน้าแรก
            </Link>
            <div className="nav-link items-center nav-hover relative">
              เมนู <BsFillCaretDownFill className="pl-[5px]" />
              <div className="menu-list">
                <ul className="list-disc">
                  <li>
                    <Link to="/Rice">ข้าวหอมมะลิ</Link>
                  </li>
                  <li>
                    <Link to="/Herb">สมุนไพร</Link>
                  </li>
                  <li>
                    <Link to="/Silk">ผ้าไหม</Link>
                  </li>
                  <li>
                    <Link to="/Product">ผลิตภัณฑ์ชุมชน</Link>
                  </li>
                  <li>
                    <Link to="/Tradition">วัฒนธรรมประเพณี</Link>
                  </li>
                  <li>
                    <Link to="/Travel">
                      แหล่งท่องเที่ยว และ สิ่งอำนวยความสะดวก
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-link items-center nav-hover relative">
              ลิงค์ที่เกี่ยวข้อง <BsFillCaretDownFill className="pl-[5px]" />
              <div className="menu-list">
                <ul className="list-disc">
                  <li>
                    <a
                      target="_black"
                      href="https://kims-rmuti.com/monitoring/"
                    >
                      KM-Innovation
                    </a>
                  </li>
                  <li>
                    <a target="_black" href="https://rcbt-sip.com/app/">
                      RCBT-SIP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-link items-center nav-hover relative">
              เครือข่าย <BsFillCaretDownFill className="pl-[5px]" />
              <div className="menu-list">
                <ul className="list-disc">
                  <li>
                    <Link to="/Philosopher">ปราชญ์</Link>
                  </li>
                  <li>
                    <Link to="/Community">ชุมชน</Link>
                  </li>
                  <li>
                    <Link to="/Government">หน่วยงานภาครัฐ</Link>
                  </li>
                  <li>
                    <Link to="/Business">หน่วยงานภาคธุรกิจ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <Nav.Link
              target="_black"
              href="https://researcher.kims-rmuti.com/mainpage/main/support"
            >
              ติดต่อสอบถาม
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
