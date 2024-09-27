import React from 'react'

const Common = (props) => {
  return (
    <div className='flex flex-col gap-[2rem]'>
        <h1 className='text-3xl font-semibold text-[#1F3765]'>
            {props.title}
        </h1>
        <p className='text-gray-800 text-[15px]'>{props.para}</p>
        <a href="" className='text-[#000000] underline font-semibold'>
            {props.head}
        </a>
    </div>
  )
}

export default Common