import React from 'react'
import Logo from '/LogoEmpresa_white.svg'
export const Footer = () => {
  return (
    <div style={{backgroundImage: 'url("wave_footer.svg")'}} className='w-full h-[350px] bg-cover bg-center bg-no-repeat p-20'>
      <img src={Logo} className='w-[200px] mt-16' />
      
    </div>
  )
}
