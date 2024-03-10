import React from 'react'

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 py-20 px-20'>
        <div className='space-y-5 mt-28'>
            <h1 className='text-3xl font-bold'>Hello, i'm </h1>
            <h2 className='text-6xl font-bold'>Dev SK web Front-end</h2>
            <p className='opacity-60'>I'm a developer, I use React JS 
                to make awsome templqte qnd website to improve myself</p>
        </div>
        <img src="https://cdn.pixabay.com/photo/2017/01/20/19/53/productivity-1995786_1280.jpg" alt="" />
    </div>
  )
}

export default Hero