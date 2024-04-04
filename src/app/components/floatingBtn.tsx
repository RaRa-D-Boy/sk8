import React from 'react';

const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <button className="bg-slate-200 hover:bg-slate-400 w-[70px] h-[70px] text-white 
      font-bold py-2 px-4 rounded-full shadow-lg animate-pulse">
        More
      </button>
    </div>
  );
};

export default FloatingButton;
