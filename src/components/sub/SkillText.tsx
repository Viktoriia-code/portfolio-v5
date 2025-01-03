"use client"

import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Bringing ideas to life in the browser
        </h1>
      </div>
      <div
      className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Making apps with modern technologies
      </div>
      <div className='Welcome-text mb-8 text-center'>
        Devoted attitude towards the world of information technology
      </div>
    </div>
  )
}

export default SkillText;