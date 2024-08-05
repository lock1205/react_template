import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Work from './Work';
import Pricing from './Pricing';

const index = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
        <FeaturesSection />
        <Work />
        <Pricing />
      </div>
    </div>
  );
};

export default index;
