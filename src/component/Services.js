import React from 'react'
import ServicesItems from './ServicesItems'

const Services = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-w-7xl auto'> 
       <ServicesItems title={Design}/>
       <ServicesItems title={Code} />
       <ServicesItems title={Deploy}/>
    </div>
  )
}

export default Services