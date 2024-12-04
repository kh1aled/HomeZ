import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Landing from "../../Components/Landing/Landing";
import Fotter from "../../Components/Fotter/Fotter";
import "./home.css";
import Companies from "../../Components/Companies/Companies";
import Residencies from "../../Components/Residencies/Residencies";
import Value from "../../Components/Value/Value";
import Contact from "../../Components/Contact/Contact";
import Started from "../../Components/Started/Started";

const Home = () => {
  const [scroolValue, SetScroolValue] = useState(0);
  const [navbarActive, SetNavbarActive] = useState(false);
  const [navWidth, SetnavWidth] = useState(0);

  const changeBg = () => {
    SetScroolValue(window.scrollY);
    const scrollTop = window.scrollY; // المسافة التي تم تمريرها من أعلى الصفحة
    const scrollHeight = document.documentElement.scrollHeight; // الطول الكامل للمحتوى
    const clientHeight = document.documentElement.clientHeight; // الطول المرئي من الصفحة

    // حساب النسبة المئوية للتمرير
    SetnavWidth(((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(2));

    console.log(navWidth);

    if (scroolValue > 50) {
      SetNavbarActive(true);
    } else {
      SetNavbarActive(false);
    }
  };
  window.onscroll = changeBg;
  return (
    <div className="home">
      <div>
        <div className="white-gradient" />
        <Navbar status={navbarActive} navWidth={navWidth} />
        <Landing />
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <Started/>
        <Fotter/>
      </div>
      {/* <About/>
      <Eduction />
      <Skills />
      <Work />
      <Fotter />  */}
    </div>
  );
};

export default Home;
