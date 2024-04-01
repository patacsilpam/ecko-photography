// components/Tabs.js
import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      label: 'WEDDING',
      content: <div>Content for Tab 1</div>,
    },
    {
      label: 'PRENUP',
      content: <div>Content for Tab 2</div>,
    },
    {
      label: 'DEBUT',
      content: <div>Content for Tab 3</div>,
    },
    {
        label: 'CHRISTENING',
        content: <div>Content for Tab 3</div>,
    },
  ];
  return (
    <div className='h-screen bg-white flex flex-col'>
      <br />
      <h1 className='text-4xl text-[#292929] p-2 text-center'>FEATURED STORIES</h1>
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
      <div className="mt-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
