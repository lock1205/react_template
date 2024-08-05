import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Work from './Work';
import Pricing from './Pricing';
import PeopleSaying from './PeopleSaying';

const index = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
        <FeaturesSection />
        <Work />
        <Pricing />
        <PeopleSaying />
      </div>
    </div>
  );
};

export default index;
