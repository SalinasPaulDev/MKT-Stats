import Logo from '/LogoEmpresa.svg'
import {Button} from '../components/Button/Button'
import {Input} from '@nextui-org/react'
import {InfoIcon} from '../img/IconInfo'
import {useHandleData} from '../store/handleData'

export default function Home() {
	const {email, setData} = useHandleData((state) => state)

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	const disabled = emailRegex.test(email)
	return (
		<>
			<div className='w-full text-center mb-12'>
				<h1 className='font-semibold mt-16 text-xl text-center md:text-4xl lg:text-[4rem]'>
					¡Bienvenido a Brand Therapy!
				</h1>
				<div className='w-3/4 p-4  m-auto mt-4 md:mt-6 lg:w-2/4'>
					<p className='text-zinc-500 text-center text-sm md:text-xl  '>
						Comprueba que tan poderosa es tu empresa o pyme. En esta app vas a
						poder medir que puntos favorecen a tu empresa y cuales hay que
						reforzar para superar a la competencia
					</p>
				</div>

				<div className='animation-row'>
					<img
						src='/down-arrow.svg'
						alt='down arrow'
						width={60}
						className='m-auto'
					/>
				</div>

				<div className='flex flex-col items-center justify-center gap-8 my-20 md:flex-row md:px-20'>
					<div className='w-3/4'>
						<img
							src='/time.png'
							alt='time icon'
							width={80}
							className='m-auto'
						/>
						<p className='text-zinc-500 text-center text-sm mt-4'>
							Potencia tu empresa con respuestas rápidas. Priorizamos la
							agilidad para impulsar tu crecimiento empresarial en tiempo
							récord.
						</p>
					</div>
					<div className='w-3/4'>
						<img
							src='/secure.png'
							alt='secure icon'
							width={80}
							className='m-auto'
						/>
						<p className='text-zinc-500 text-center text-sm mt-4'>
							Protege tu información con contacto directo. Sin intermediarios,
							tu privacidad es nuestra prioridad. ¡Empieza a crecer tu empresa!
						</p>
					</div>
					<div className='w-3/4'>
						<img
							src='/graph.png'
							alt='graph icon'
							width={80}
							className='m-auto'
						/>
						<p className='text-zinc-500 text-center text-sm mt-4'>
							Potencia tus estadísticas optimizando aspectos clave en tu
							empresa. Nuestras sugerencias impulsarán tu crecimiento y
							mejorarán tus resultados.
						</p>
					</div>
				</div>
				<div className='flex gap-2 justify-center items-center w-1/5 m-auto  mb-16'>
					<Input
						type='email'
						variant={'underlined'}
						placeholder='example@gmail.com'
						className=' m-auto'
						color='primary'
						onChange={(e) => setData({email: e.target.value})}
					/>
					{/* <div className='cursor-pointer'>
						<InfoIcon />
					</div> */}
				</div>
				<Button
					link={'/questions'}
					text={'¡Comencemos!'}
					icon
					disabled={!disabled}
				/>
				<img
					src={Logo}
					alt='id creativa logo'
					className='w-[200px] h-[100px] m-auto my-12 opacity-20'
				/>
			</div>
		</>
	)
}
