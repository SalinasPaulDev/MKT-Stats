import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Logo from '/logo.svg'
import { Footer } from '../components/Footer/Footer'


export const Header = () => {
  const location = useLocation()
  return (
    <div className={`relative ${location.pathname !== '/' ? 'pb-[400px]': '' }`}>
    <Link to={'/'}>
    <div className="w-full  flex items-center justify-center bg-center bg-no-repeat bg-cover py-8"  style={{backgroundImage: 'url("/header_wave.svg")'}}>
      <div className='w-10'>
        <img src={Logo} />
      </div>
      <p className="p-4 font-semibold text-xl text-slate-950 text-white">Brand Therapy</p>
    </div>
    </Link>
    <div>
      <Outlet />
    </div>
    <Footer />
    <ScrollRestoration />
</div>
  )
}
