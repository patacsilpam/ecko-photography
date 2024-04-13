import React from 'react';

const SocialProofComponent = () => {
  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center px-4">
      {/* Header and Description */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-[#292929]">ECKO Photography by the numbers</h2>
        <p className="text-base text-black mt-2 md:w-1/2 m-auto text-justify">We specialize in capturing the timeless moments of 
        <strong className='text-[#292929]"'> weddings, debuts, and christenings</strong>. With a passion for storytelling and an
         eye for detail, we strive to create stunning imagery that reflects the unique essence of each special occasion.
        </p>
      </div>
      {/* Statistics */}
      <div className="flex flex-col justify-center md:space-x-24  md:flex-row w-full mt-3">
        {/* Statistic Item */}
        <div className="flex flex-col items-center py-4 ">
          <p className="text-4xl md:text-6xl font-bold text-[#277764] py-2">50+</p>
          <p className="text-sm text-[#292929] font-medium text-center">WEDDINGS PHOTOGRAPHED</p>
        </div>
        {/* Statistic Item */}
        <div className="flex flex-col items-center py-4 ">
          <p className="text-4xl md:text-6xl font-bold text-[#277764] py-2">4+</p>
          <p className="text-sm text-[#292929] font-medium  text-center">YEARS IN BUSINESS</p>
        </div>
         {/* Statistic Item */}
         <div className="flex flex-col items-center py-4 ">
          <p className="text-4xl md:text-6xl font-bold text-[#277764] py-2 text-center">20,102+</p>
          <p className="md:text-sm text-[#292929] font-medium text-xs  text-center">PHOTOGRAPHS DELIVERED</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofComponent;
