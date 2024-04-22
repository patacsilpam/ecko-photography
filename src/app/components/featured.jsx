// components/Tabs.js
import { useState } from 'react';
import tabs from '../../../data/weddings'
import Image from 'next/image';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='h-screen bg-white flex flex-col '>
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
      <div className="mt-4 ">
        {
          tabs[activeTab].content.map((tab,index) =>
            <div key={index}>
                <p>{tab.story}</p>
                <Image src={tab.image} alt={tab.story} width={50} height={50}/>
            </div> 
          )
        }
      </div>
      <button className='bg-[#292929] text-white w-32 p-2 m-auto'>View All</button>
    </div>
  );
};

export default Tabs;
