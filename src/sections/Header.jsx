import {Link, Outlet, ScrollRestoration, useLocation} from 'react-router-dom'
import Logo from '/logo.svg'
import {Footer} from '../components/Footer/Footer'

export const Header = () => {
	const location = useLocation()

	return (
		<div
			className={`relative ${location.pathname !== '/' ? 'pb-[400px]' : ''}`}
		>
			<div className='flex items-center justify-between px-6 py-4'>
				<Link to={'/'}>
					<div className='w-full flex items-center bg-center bg-no-repeat bg-cover'>
						<div>
							<img
								src={Logo}
								className='w-10 h-10'
								alt=''
							/>
						</div>
						<p className='pl-2 font-semibold text-xl text-slate-950'>
							Brand Therapy
						</p>
					</div>
				</Link>
				<div className='flex gap-4'>
					<Link>
						<p className='text-neutral-500 hover:text-black'>¿Quienes somos?</p>
					</Link>
					<Link>
						<p className='text-neutral-500 hover:text-black'>¿Quienes somos?</p>
					</Link>
				</div>
			</div>
			<div>
				<Outlet />
			</div>
			<Footer />
			<ScrollRestoration />
		</div>
	)
}
