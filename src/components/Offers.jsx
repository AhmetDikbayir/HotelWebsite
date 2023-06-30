import React from 'react';

const Offers = () => {
  return (
    <div className='max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between'>
      <span className='border-solid border-2 border-indigo-600 rounded-lg bg-slate-400 cursor-pointer hover:bg-cyan-50 hover:shadow-xl'>
        <p className='text-lg font-bold text-gray-700 p-2 '>Booking Incentives</p>
      </span>
      <span className='border-solid border-2 border-indigo-600 rounded-lg bg-slate-400 cursor-pointer hover:bg-cyan-50 hover:shadow-xl'>
        <p className='text-lg font-bold text-gray-700 p-2'>Competitive Rates</p>
      </span>
      <span className='border-solid border-2 border-indigo-600 rounded-lg bg-slate-400 cursor-pointer hover:bg-cyan-50 hover:shadow-xl'>
        <p className='text-lg font-bold text-gray-700 p-2'>Book With Flexibility</p>
      </span>
      <span className='border-solid border-2 border-indigo-600 rounded-lg bg-slate-400 cursor-pointer hover:bg-cyan-50 hover:shadow-xl'>
        <p className='text-lg font-bold text-gray-700 p-2'>Trip Insurance</p>
      </span>
      
    </div>
  );
};

export default Offers;
