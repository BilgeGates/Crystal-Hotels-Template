import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SectionFive from "./components/sectionfive/SectionFive";
import SectionThree from "./components/sectionthree/SectionThree";
import SectionTwo from "./components/sectiontwo/SectionTwo";
import SectionOne from "./components/sectionone/SectionOne";
import SectionFour from "./components/sectionfour/SectionFour";

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
