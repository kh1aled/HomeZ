import React, { useRef } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";


const Navbar = ({ status, navWidth }) => {
  const texts = useSelector((state) => state.translation.texts);
  const theme = useSelector((state) => state.theme.theme);
  const collapse = useRef();
  const nav_toggler = useRef();
  const nav = useRef();

  // useEffect(()=>{
  //   nav.current.classList.toggle("light")
  // },[theme])

  const handleshow = () => {
    collapse.current.classList.toggle("show");
    nav_toggler.current.classList.toggle("open");
  };

  return (
    <nav
      className={"navbar myNav navbar-expand-lg navbar-light"}
      ref={nav}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleshow}
      >
        {/* <i className="fa-solid fa-angle-down"></i> */}
        <div id="nav-icon" class="text-sky-500 " ref={nav_toggler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="navbar-icon">
        <h1>HomeZ</h1>
      </div>
      <div
        ref={collapse}
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="landing">
              Residencies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="skills">
              Our Value
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="experience">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"contact"}>
              Get Started
            </Link>
          </li>
          <li className="nav-item lang">
            <Link className="nav-link" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
