import React from "react";
import "./ContactStyles.css";
import layer from "../../assets/analog-landscape-city-with-buildings.jpg";

const Contact = () => {
  return (
    <section id="contact" className="contact innerWidth paddings ">
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-7 description">
          <span className="orangeText ">our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            molestias cupiditate quo.
          </span>
          <div className="row g-2 mt-2">
            <div className="col-6 item rounded-2">
              <div className="details d-flex justify-content-start align-items-center g-3">
                <span className="icon"><i class="fa-solid fa-phone"></i></span>
                <div className="d-flex align-items-start justify-content-center flex-column">
                  <span className="primaryText">call</span>
                  <span className="secondaryText">01159107545</span>
                </div>
              </div>
              <button className="btn rounded-2 callnow">call now</button>
            </div>
            <div className="col-6 item rounded-2">
              <div className="details d-flex justify-content-start align-items-center g-3">
                <span className="icon"><i class="fa-regular fa-comment-dots"></i></span>
                <div className="d-flex align-items-start justify-content-center flex-column">
                  <span className="primaryText">chat</span>
                  <span className="secondaryText">01159107545</span>
                </div>
              </div>
              <button className="btn rounded-2 callnow">chat now</button>
            </div>
            <div className="col-6 item rounded-2">
              <div className="details d-flex justify-content-start align-items-center g-3">
                <span className="icon"><i class="fa-solid fa-video"></i></span>
                <div className="d-flex align-items-start justify-content-center flex-column">
                  <span className="primaryText">video call</span>
                  <span className="secondaryText">01159107545</span>
                </div>
              </div>
              <button className="btn rounded-2 callnow">video call now</button>
            </div>
            <div className="col-6 item rounded-2">
              <div className="details d-flex justify-content-start align-items-center g-3">
                <span className="icon"><i class="fa-brands fa-whatsapp"></i></span>
                <div className="d-flex align-items-start justify-content-center flex-column">
                  <span className="primaryText">message</span>
                  <span className="secondaryText">01159107545</span>
                </div>
              </div>
              <button className="btn rounded-2 callnow">message now</button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5 image_container">
          <div className="image-inside-container">
            <img src={layer} className=" img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
