import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SectionFive from "./components/sectionfive/SectionFive";
import SectionThree from "./components/sectionthree/SectionThree";
import SectionTwo from "./components/sectiontwo/SectionTwo";
import SectionOne from "./components/sectionone/SectionOne";
import SectionFour from "./components/sectionfour/SectionFour";
import SectionSix from "./components/sectionsix/SectionSix";
import SectionSeven from "./components/sectionseven/SectionSeven";

const App = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  );
};

export default App;
