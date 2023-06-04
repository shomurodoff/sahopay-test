import React from "react";
import HomeSection from "./sections/home-section";
import SolutionSection from "./sections/features-section";
import FeatureSection from "./sections/feature-section";
import AboutSection from "./sections/about-section";

const Index = () => {
  return (
    <div>
      <HomeSection />
      <SolutionSection />
        <FeatureSection/>
        <AboutSection/>
    </div>
  );
};

export default Index;
