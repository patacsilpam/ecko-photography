// components/Tabs.js
import { useState } from 'react';
import tabs from '../../../data/weddings'
import Image from 'next/image';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='h-fit bg-white flex flex-col '>
      <div className='mt-20'>
        <h1 className='text-2xl md:text-4xl text-[#292929] text-center'>FEATURED STORIES</h1>
      </div>
      <div className="flex md:flex-nowrap flex-wrap md:justify-around justify-between p-2 mt-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? ' text-[#292929] font-semibold'
                : ' text-[#a6a6a9]'
            }  rounded focus:outline-none`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 grid md:grid-cols-3 grid-cols-1 place-items-center p-5">
        {
          tabs[activeTab].content.map((tab,index) =>
            <div key={index} className='mb-10'>
                
                <Image src={tab.image} alt={tab.story} className='h-50 w-50' width={350} height={350}/>
                <p className='text-center p-2'>{tab.story}</p>
            </div> 
          )
        }
        
      </div>
      <div className='p-10 m-auto'>
        <button className='bg-[#292929] text-white w-32 p-2'>View All</button>
      </div>
    </div>
  );
};

export default Tabs;
