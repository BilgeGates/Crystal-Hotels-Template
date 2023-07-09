import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SectionOne from "./components/sections/sectionone/SectionOne";
import SectionTwo from "./components/sections/sectiontwo/SectionTwo";
import SectionThree from "./components/sections/sectionthree/SectionThree";
import SectionFour from "./components/sections/sectionfour/SectionFour";
import SectionFive from "./components/sections/sectionfive/SectionFive";

const App = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
};

export default App;
