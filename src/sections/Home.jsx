import { Link } from 'react-router-dom'
import { Header } from './Header'
export const Home = () => {
  return (
    <div className="w-full text-center">
        <Header />

        <h1 className="font-semibold mt-16 text-center">¡Bienvenido a Brand Therapy!</h1>
        <div className="w-1/3 m-auto mt-8">
            <p className="text-zinc-500 text-center text-sm">
                Comprueba que tan poderosa es tu empresa o pyme. En esta app vas a poder medir que puntos favorecen a tu empresa y cuales hay que reforzar para superar a la competencia 
            </p>
        </div>


        <Link to={'/questions'}>
            <button className='mt-20 bg-blue-500 py-2 px-4 rounded-md font-semibold text-white m-auto'>
                ¡Comenzemos!
            </button>
        </Link>
    </div>
  )
}
