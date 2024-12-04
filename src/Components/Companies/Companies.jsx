import React from "react";
import "./CompaniesStyles.css";
import real_logo from "../../assets/real_logo.png"
const Companies = () => {

  return (
      <section className="companies w-100 h-25 d-flex justify-content-center align-items-center">
        <img src={real_logo} alt="" />
        <img src={real_logo} alt="" />
        <img src={real_logo} alt="" />
        <img src={real_logo} alt="" />
      </section>
  );
};

export default Companies;
