import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import IndiaBanner from "../components/IndiaBanner";
import Services from "../components/Services";
import FeatureItems from "../components/FeatureItems";
import OfferBanner from "../components/OfferBanner";
import FeatureItems2 from "../components/FeatureItem2";
import DesginBanner from "../components/DesginBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <IndiaBanner />
      <Services />
      <FeatureItems />
      <OfferBanner />
      <FeatureItems2 />
      <DesginBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
