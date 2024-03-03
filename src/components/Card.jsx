import React from 'react'
import pc from "../images/pc.png"
const Card = () => {
  return (
    <div className='flex flex-col justify-center items-start mt-[72px] w-[333px] h-[425px] relative'>
     <img className='absolute top-9 left-[96px]' src={pc} width={141} height={103} alt="PC"/>
      <div className='mt-[93px]'>
      <div className='flex gap-1 mt-[63px] ml-5'>
        <div className='w-[69px] h-[28px] bg-gray-200 rounded-lg text-center'>
        <span className='w-[53px] h-[20px] text-[13px] leading-5 text-blue-700'>20% Off</span>
        </div>
        <div className='w-[107px] h-[28px] bg-gray-200 rounded-lg text-center'>
        <span className='w-[91px] h-[20px] text-[13px] leading-5 text-blue-700 text-center'>Limited time</span>
        </div>
     </div>
     <p className='mt-2 ml-7 relative left-[87px] font-bold text-base text-gray-600'>Webbuilder 1</p>
     <p className='ml-7 font normal text-base w-[284px] h-[48px] text-gray-700'>Computer  Modern clasic with wix support</p>
     <div className='ml-7 mt-[6px]'>
        <span className='text-gray-700 text-xl'>$39.96</span>
        <span className='text-gray-300 ml-[10px] mt-4 text-sm'>$49.96</span>
        <span className='text-red-600 ml-3 mt-4 text-sm'>(20% Off)</span>
     </div>
     <button className='w-[292px] h-[48px] bg-blue-500 border rounded-xl text-white ml-5 mt-3'>View Deal</button>
      </div>
    </div>
  )
}

export default Card