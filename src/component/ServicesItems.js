import React from 'react'

const ServicesItems = ({image, title, description}) => {
  return (
    <div>
         <div className='shadow-lg bg-white space-y-4 border p-4'>
            <img  className='h-12' src={image} alt="" />
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='text-center'> {description}</p>
            <button className='bg-red-500 rounded-full py-2 px-6 text-white font-bold'>Hire Me</button>
        </div>
    </div>
  )
}

export default ServicesItems