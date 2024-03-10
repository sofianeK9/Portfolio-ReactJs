import React from 'react'
import ServicesItems from './ServicesItems'

const Services = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-w-7xl auto'> 
       <ServicesItems 
          title='Design' 
          description={"ajouter du texte ici pour dire que vous offrer un design pour leur business"} 
          image="https://cdn1.iconfinder.com/data/icons/flat-christmas-icons-1/75/_magic_wand-256.png"
          />
       <ServicesItems 
          title='Code' 
          description={"ajouter du texte ici pour dire que vous offrer un design pour leur business"}
          image="https://cdn2.iconfinder.com/data/icons/css-vol-1/24/code-slash-512.png" 
       />
       <ServicesItems 
          title='Deploy' 
          description={"ajouter du texte ici pour dire que vous offrer un design pour leur business"} 
          image="https://cdn4.iconfinder.com/data/icons/product-management/64/46_transform_and_development-256.png" 
          />
    </div>
  )
}

export default Services