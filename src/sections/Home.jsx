import { Link, Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Loader } from '../components/Loader/Loader'
import Logo from '/LogoEmpresa.svg'
export default function Home () {
  return (
    <>
        <div className="w-full text-center">
            <h1 className="font-semibold mt-16 text-xl text-center md:text-4xl lg:text-[4rem]">¡Bienvenido a Brand Therapy!</h1>
            <div className="w-3/4 p-4  m-auto mt-4 md:mt-6 lg:w-1/3">
                <p className="text-zinc-500 text-center text-sm md:text-xl  ">
                    Comprueba que tan poderosa es tu empresa o pyme. En esta app vas a poder medir que puntos favorecen a tu empresa y cuales hay que reforzar para superar a la competencia 
                </p>
            </div>


            <Link to={'/questions'}>
                <button className='mt-8 md:mt-10 bg-blue-500 py-2 px-4 rounded-md font-semibold text-white m-auto text-xl'>
                    ¡Comenzemos!
                </button>
            </Link>

            <img src={Logo} alt='id creativa logo' className='w-[200px] m-auto mt-12 opacity-20'/>
        </div>
        
    </>
  )
}


