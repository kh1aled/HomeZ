import React from "react";
import "./Landing.css";
import layer from "../../assets/analog-landscape-city-with-buildings.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
const Landing = () => {
  const texts = useSelector((state) => state.translation.texts.summary);
  const theme = useSelector((state) => state.theme.theme);
  return (
    <section
      id={"landing"}
      className={
        theme === "dark"
          ? "landing h-100 w-100 dark"
          : "landing h-100 w-100 light"
      }
    >
      <div className="row">
        {/* left side */}
        <div className="col-sm-12 col-md-12 col-lg-6 description flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-description">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty{" "}
            </span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-location-dot icon-link"></i>
            <input type="text" className="input border-0 rounded-1 p-2 " />
            <button className="btn btn-primary">search</button>
          </div>
          <div className=" d-flex justify-content-center align-items-center stats">
            <div className="flexColContainer stat">
              <span>
                <CountUp start={8800} end={9000} duraion={4} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColContainer stat">
              <span>
                <CountUp start={1950} end={2000} duraion={4} /><span className="plus">+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColContainer stat">
              <span>
                <CountUp end={28} duraion={4} /><span className="plus">+</span>
              </span>
              <span className="secondaryText">Award Wininig</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="col-sm-12 col-md-12 col-lg-6 image_container">
          <div className="image-inside-container">
            <img src={layer} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
