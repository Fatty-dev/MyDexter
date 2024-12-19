import React from "react";
import Hero from "./Hero";
import Risk from "./Risk";
import Features from "./Features";
import Update from "./Update";
import Review from "./Review";
import Why from "./Why";
import Trial from "../Pricing/Trial";
const Home = () => {
  return (
  <div>
    <Hero/>
    <Risk/>
    <Features/>
    <Why/>
    <Review/>
    <Update/>
    <div className="container mx-auto">
    <Trial/>
    </div>

  </div>
  );
};

export default Home;
