import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Socials from './Socials';
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24 z-[50]'>
      <div>
        <div className='Welcome-box py-[6px] px-[13px] border border-[#7042f88b] opacity-[0.9]'>
          <MapPinIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
          <h1 className='Welcome-text text-[13px]'>Helsinki, Finland</h1>
        </div>
        <div className='flex flex-col gap-1 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
          <a href="/" className='z-[100]'>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-5xl font-bold sm:text-5xl">Viktoriia<br />Beloborodova</h1>
            <h2 className='mt-3 text-2xl font-medium tracking-tight text-heading sm:text-3xl'>Software Developer</h2>
          </a>
        </div>
        <p className="basic-text mt-5 mb-8 max-w-[600px]">
          I&apos;m a software development student at Metropolia AMK. I have a
          vocational degree in software development, a bachelor degree in management and 4 years of
          experience in the IT field.
        </p>
        <div>
          <Navbar />
        </div>
      </div>

      <div>
        <Socials />
      </div>
    </header>
  )
}

export default Header