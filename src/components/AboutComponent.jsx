import React from 'react'

const AboutComponent = ({ Icon, title, Info}) => {
  return (
    <div className='flex flex-row gap-[1rem]'>
        <div>
           <Icon size={35} className="text-[#1F3765]"></Icon>
        </div>
        <div className='flex flex-col gap-[0.5rem]'>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <h2 className='text-[#878787]'>{Info}</h2>
        </div>
    </div>
  )
}

export default AboutComponent