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
      <div className="flex mt-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? ' text-[#292929]'
                : ' text-[#DADADD]'
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
