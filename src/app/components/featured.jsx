// components/Tabs.js
import { useState } from 'react';
const tabs = [
  {
    label: 'WEDDING',
    content: [
      {
        story: 'Dulce & Lyndon'
      },
      {
        story: 'Larah & Adriel'
      },
      {
        story: 'Irma & Jordan'
      },
      {
        story: 'Kris & JC'
      },
      {
        story: 'Emilyn & Carl'
      },
      {
        story: 'Peter & Bianca'
      }
    ]
  },
  {
    label: 'PRENUP',
    content: [
      {
        story: 'Dulce & Lyndon'
      }
    ]
  }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='h-screen bg-white flex flex-col'>
      <br />
      <h1 className='text-4xl text-[#292929] p-10 text-center'>FEATURED STORIES</h1>
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
    </div>
  );
};

export default Tabs;
