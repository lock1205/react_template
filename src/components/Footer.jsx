import React from 'react';
import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from '../constants/data';

import FooterComponent from './FooterComponent';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10">
        <FooterComponent title="Resources" linkData={resourcesLinks} />
        <FooterComponent title="Platform" linkData={platformLinks} />
        <FooterComponent title="Community" linkData={communityLinks} />
      </div>
    </footer>
  );
};

export default Footer;
