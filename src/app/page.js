'use client'
import React  from 'react';
import HeroComponent from './components/hero'
import SocialProofComponent from './components/proof';
import ServicesComponent from './components/services'
import FeaturedComponent from './components/featured';
import NominationComponent from './components/nominations';
import FooterComponent from './headers/footer'

const Navbar = () => {
  return (
    <div>
     <HeroComponent/>
     <NominationComponent/>
     <SocialProofComponent/>
     <ServicesComponent/>
     <FeaturedComponent/> 
     <FooterComponent/>
    </div>
  );
};

export default Navbar;
