import React from 'react';

const SocialProofComponent = () => {
  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center px-8">
      {/* Header and Description */}
      <div className="text-center max-w-6xl mb-8">
        <h2 className="text-2xl font-bold text-[#292929]">ECKO Photography by the numbers</h2>
        <p className="text-base text-black mt-2">We specialize in capturing the timeless moments of weddings, debuts, and christenings. With a passion for storytelling and an eye for detail, we strive to create stunning imagery that reflects the unique essence of each special occasion.</p>
      </div>

      {/* Statistics */}
      <div className="flex flex-wrap justify-between max-w-8xl">
        {/* Statistic Item */}
        <div className="flex flex-col items-center py-4 px-32 w-full md:w-auto">
          <p className="text-6xl font-bold text-[#277764]">50+</p>
          <p className="text-sm text-[#292929] font-medium">WEDDINGS PHOTOGRAPHED</p>
        </div>
        
        {/* Statistic Item */}
        <div className="flex flex-col items-center py-4 px-32 w-full md:w-auto">
          <p className="text-6xl font-bold text-[#277764]">4+</p>
          <p className="text-sm text-[#292929] font-medium">YEARS IN BUSINESS</p>
        </div>
        
        {/* Statistic Item */}
        <div className="flex flex-col items-center py-4 px-32 w-full md:w-auto">
          <p className="text-6xl font-bold text-[#277764]">20,102+</p>
          <p className="text-sm text-[#292929] font-medium">PHOTOGRAPHS DELIVERED</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofComponent;