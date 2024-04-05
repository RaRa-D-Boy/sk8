import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const FloatingButton = ({ prop,route }: any) => {
  // const btnText = prop.text
  const router = useRouter();
  return (
    <div className="fixed bottom-6 right-6 z-10 absolute">
      <div className='p-2 glass-card2  rounded-full w-[80px] h-[80px] shadow-lg animate-bounce'>
        <button className=" border border-white border-2 hover:bg-white hover:text-black  w-[65px] h-[65px] text-white 
          font-normal py-2 px-2 rounded-full text-xl " onClick={() => router.push(`${route}`)}>
          {prop}
        </button>
      </div>
    </div>
  );
};

export default FloatingButton;
