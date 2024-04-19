import React from 'react'
import Logo from '/LogoEmpresa_white.svg'
import {useLocation} from 'react-router-dom'
import {Divider} from '@nextui-org/react'
export const Footer = () => {
	const location = useLocation()

	return (
		<div
			style={{backgroundImage: 'url("wave_footer.svg")'}}
			className={`${location.pathname === '/' ? 'hidden' : ''} w-full h-[350px] bg-cover bg-center bg-no-repeat p-20 absolute left-0 bottom-0 px-12 md:px-20`}
		>
			<div className={`md:flex md:justify-between items-end`}>
				<img
					src={Logo}
					alt=''
					className='w-[200px] h-[100px] mt-16 max-md:m-auto max-md:mt-16 '
				/>
				<div className='flex flex-col justify-center items-center'>
					<p className='font-semibold text-white max-md:hidden'>Contactenos!</p>
					<Divider className='my-2 color-red-800 max-md:hidden' />

					<div className='flex gap-2'>
						<img
							src={'instagram.svg'}
							alt='QR Code'
							className='w-[30px] h-[30px] max-md:hidden hover:cursor-pointer'
						/>
						<img
							src={'linkedin.svg'}
							alt='QR Code'
							className='w-[30px] h-[30px] max-md:hidden hover:cursor-pointer'
						/>
					</div>
				</div>
			</div>
			<div className='text-center text-slate-700 max-md:mt-12 max-md:text-sm md:mt-8 max-md:w-full'>
				<p>
					Creación de{' '}
					<a
						href='https://www.linkedin.com/in/brian-pauldev/'
						id='link'
					>
						Brian Paul Salinas
					</a>{' '}
					by{' '}
					<a
						id='link'
						href='https://idcreativa.com/'
						target='_blank'
						rel='noreferrer'
					>
						ID Creativa ®️
					</a>
				</p>
			</div>
		</div>
	)
}
