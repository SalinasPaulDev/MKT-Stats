import React from 'react'
import Logo from '/LogoEmpresa_white.svg'
import QR_code from '/instagram_QR.png'
import { useLocation } from 'react-router-dom'
export const Footer = () => {
  const location = useLocation()

  return (
    <div style={{backgroundImage: 'url("wave_footer.svg")'}} className={`${location.pathname === '/' ? 'hidden' : ''} w-full h-[350px] bg-cover bg-center bg-no-repeat p-20 absolute left-0 bottom-0`}>
      <div className={`md:flex md:justify-between items-center`}>
        <img src={Logo} className='w-[200px] mt-16' />
        <img src={QR_code} className='w-[160px] h-[160px] mt-16 max-md:hidden'/>
        
      </div>
      <div className='text-center text-slate-700 max-md:mt-12 max-md:text-sm'>
        <p>Creacion de <a href='' id='link'>Brian Paul Salinas</a> by <a id='link' href='https://idcreativa.com/' target='_blank'>ID Creaiva</a></p>
      </div>
    </div>
  )
}
