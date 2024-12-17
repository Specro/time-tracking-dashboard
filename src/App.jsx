import { useState, useEffect } from 'react';
import TimeCard from './TimeCard';
import TimeframeButton from './TimeframeButton';

function App() {
  const [activeTimeframe, setActiveTimeframe] = useState('daily');
  const [data, setData] = useState([]);

  const timeframeTitles = {
    daily: 'Day',
    weekly: 'Week',
    monthly: 'Month'
  };

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
      setData(data);  
    });
  }, []);

  return (
    <div className="grid grid-cols-1 w-full gap-x-8 gap-y-7 lg:grid-cols-4 lg:grid-rows-2">
      <div className="rounded-2xl bg-dark-blue row-span-2 text-white lg:rounded-3xl">
        <div className="bg-blue rounded-2xl py-8 px-7 flex gap-4 lg:rounded-3xl lg:pt-9 lg:pb-20 lg:gap-11 lg:flex-col">
          <img className="h-16 w-16 border-4 border-white rounded-full lg:h-20 lg:w-20" src="./images/image-jeremy.png" alt="Jeremy" />
          <div>
            <span className="text-pale-blue mb-3">Report for</span>
            <h1 className="text-xl font-light leading-tight lg:text-4xl">Jeremy Robson</h1>
          </div>
        </div>
        <div className="px-7 py-6 flex justify-between gap-4 items-start lg:p-8 lg:flex-col">
          <TimeframeButton active={activeTimeframe==='daily'} onClick={() => setActiveTimeframe('daily')} title="Daily"/>
          <TimeframeButton active={activeTimeframe==='weekly'} onClick={() => setActiveTimeframe('weekly')} title="Weekly"/>
          <TimeframeButton active={activeTimeframe==='monthly'} onClick={() => setActiveTimeframe('monthly')} title="Monthly"/>
        </div>
      </div>
      {data.map(card => (
        <TimeCard key={card.title} timeframe={card.timeframes[activeTimeframe]} title={card.title} prevTitle={timeframeTitles[activeTimeframe]} bg={card.bg} icon={card.icon} />
      ))} 
    </div>
  )
}

export default App
