import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({link, text, icon}) => {
  return (
    <Link to={link}>
        <button className='mt-8 md:mt-10 bg-blue-500 py-2 px-4 rounded-2xl font-semibold text-white m-auto text-base hover:bg-blue-600  transition duration-500 flex items-center justify-between gap-2'>
            {text}
            {icon && (
              <img src={'/arrow.svg'} alt='arrow icon' className='w-4 h-4'/>
            )}
            
        </button>
    </Link>
  )
}
