"use client"

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Experince_data } from "../constants/data"
import { MapPinIcon } from '@heroicons/react/24/outline'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Card from './ui/Card'

const Experience = (props, ref) => {

  return (
    <section className='z-[50] scroll-mt-16 lg:scroll-mt-24'>
      <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Experience
      </h3>
      <div className='mt-8 flex flex-col gap-6 lg:gap-12 group/list'>
        {Experince_data.map((experience,index) => (
          <Card key={index}>
            <h3 className='nav-text text-navText sm:col-span-2 mt-1 mb-2 z-10'>
              {experience.date_title}
            </h3>
            <div className='z-10 sm:col-span-6'>
              <h3 className='text-heading'>
                {experience.name} @{" "}
                {experience.link ? (
                  <a href={experience.link} className="inline-flex items-center font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent group/link text-base" target="_blank" rel="noopener noreferrer" aria-label={`${experience.place_name} (opens in a new tab)`} title={`${experience.place_name} website`}>
                    {experience.place_name}
                    <ArrowUpRightIcon className='ml-1 h-5 w-5'/>
                  </a>
                ): (
                  <span>{experience.place_name}</span>
                )}
              </h3>
              <span className='Welcome-text text-sm whitespace-nowrap inline-flex mt-1'><MapPinIcon className='text-[#b49bff] mr-1 h-5 w-5'/>{experience.location}</span>
              <StaticImage
                src={experience.image_src}
                alt={experience.place_name}
                width={experience.width}
                height={experience.height}
              />
              {experience.job_tasks && (
                <div className="flex flex-col gap-[6px] mt-1">
                  {experience.job_tasks.map((task, index) => (
                    <div key={index} className='flex gap-2 text-sm'>
                      <span className='w-2 text-gray-500'>▸</span>
                      <p className="sub-text">{task}</p>
                    </div>
                  ))}
                </div>
              )}
              {experience.tech_stack && (
                <div className="flex flex-wrap gap-2 mt-2 z-11">
                  {experience.tech_stack.map((skill, index) => (
                    <div
                    key={index}
                    className='Welcome-box py-1 px-[13px] border border-[#7042f88b] opacity-[0.9]'
                    >
                      <span className='Welcome-text text-[13px]'>{skill}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Experience