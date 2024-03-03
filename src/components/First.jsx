import React from 'react'
import trophy from "../images/trophy.png"
const First = () => {
  return (
    <div className='w-[136px] h-[34px] color1 absolute -ml-3'>
        <img src={trophy} width={20} height={20} alt="trophy"/>
        <span className='w-[92px] h-[24px] text-base'>Best Choice</span>
    </div>
  )
}

export default First