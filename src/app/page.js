'use client'
import React, { useState } from 'react';
import NavbarComponent from './headers/navbar'
import SocialProofComponent from './components/proof';
import ServicesComponent from './components/services'
import FeaturedComponent from './components/featured';
import NominationComponent from './components/nominations';
import FooterComponent from './headers/footer'

const Navbar = () => {
  return (
    <div>
     <NavbarComponent/>
     <NominationComponent/>
     <SocialProofComponent/>
     <ServicesComponent/>
     <FeaturedComponent/> 
     <FooterComponent/>
    </div>
  );
};

export default Navbar;
