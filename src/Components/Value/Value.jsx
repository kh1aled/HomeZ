import React, { useState } from "react";
import "./ValueStyles.css";
import layer from "../../assets/analog-landscape-city-with-buildings.jpg";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Value = () => {
  const [className, setClassName] = useState(null);
  return (
    <section className="value innerWidth paddings ">
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-5 image_container">
          <div className="image-inside-container">
            <img src={layer} className=" img-fluid" alt="" />
          </div>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-7 description">
          <span className="orangeText ">our value</span>
          <span className="primaryText">value we give to you</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            molestias cupiditate quo.
          </span>

          <Accordion className="accordion">
            <AccordionItem className={`accordion-item ${className}`}>
              <AccordionItemHeading>
                <AccordionItemButton className="flexCenter accordionButton">
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded
                        ? setClassName("expanded")
                        : setClassName("collapsed")
                    }
                  </AccordionItemState>

                  <div className="flexCenter icon">
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <span className="primaryText">
                    Is free will real or just an illusion?
                  </span>
                  <div className="flexCenter icon">
                    <i
                      class={`fa-solid fa-chevron-${
                        className === "expanded" ? "up" : "down"
                      }`}
                    ></i>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="secondaryText text-center">
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={`accordion-item ${className}`}>
              <AccordionItemHeading>
                <AccordionItemButton className="flexCenter accordionButton">
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded
                        ? setClassName("expanded")
                        : setClassName("collapsed")
                    }
                  </AccordionItemState>

                  <div className="flexCenter icon">
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <span className="primaryText">
                    Is free will real or just an illusion?
                  </span>
                  <div className="flexCenter icon">
                    <i
                      class={`fa-solid fa-chevron-${
                        className === "expanded" ? "up" : "down"
                      }`}
                    ></i>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="secondaryText text-center">
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
