import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white text-black p-20 flex justify-between items'>
            <div>
                <ul className='flex space-x-10'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>Hire me</li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-6'>
                    <img className='h-12' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt="" />
                    <img className='h-12' src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/github-512.png" alt="" />
                </ul>
            </div>
        </div>
    )
}

export default Footer