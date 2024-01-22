import React from 'react'
import Logo from '/LogoEmpresa_white.svg'
import { useLocation } from 'react-router-dom'
export const Footer = () => {
  const location = useLocation()

  return (
    <div style={{backgroundImage: 'url("wave_footer.svg")'}} className={`${location.pathname === '/' ? 'hidden' : ''} w-full h-[350px] bg-cover bg-center bg-no-repeat p-20 absolute left-0 bottom-0`}>
      <img src={Logo} className='w-[200px] mt-16' />
      
    </div>
  )
}
