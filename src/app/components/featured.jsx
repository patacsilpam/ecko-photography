// components/Tabs.js
import { useState } from 'react';
import tabs from '../../../data/weddings'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='h-screen bg-white flex flex-col'>
      <div className='mt-20'>
        <h1 className='text-4xl text-[#292929] text-center'>FEATURED STORIES</h1>
      </div>
      <div className="flex justify-around mt-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? ' text-[#292929] font-semibold'
                : ' text-[#a6a6a9]'
            } px-4 py-2 mr-2 rounded focus:outline-none`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 place-items-center">
        {
          tabs[activeTab].content.map((tab,index) =>
            <div key={index}>
                <p>{tab.story}</p>
            </div> 
          )
        }
      </div>
      <button className='bg-[#292929] text-white w-32 p-2 m-auto'>View All</button>
    </div>
  );
};

export default Tabs;
