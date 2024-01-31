import Logo from '/LogoEmpresa.svg'
import { Button } from '../components/Button/Button'
export default function Home () {
  return (
    <>
        <div className="w-full text-center">
            <h1 className="font-semibold mt-16 text-xl text-center md:text-4xl lg:text-[4rem]">¡Bienvenido a Brand Therapy!</h1>
            <div className="w-3/4 p-4  m-auto mt-4 md:mt-6 lg:w-2/4">
                <p className="text-zinc-500 text-center text-sm md:text-xl  ">
                    Comprueba que tan poderosa es tu empresa o pyme. En esta app vas a poder medir que puntos favorecen a tu empresa y cuales hay que reforzar para superar a la competencia 
                </p>
            </div>

            <Button link={'/questions'} text={'¡Comenzemos!'}/>

            <img src={Logo} alt='id creativa logo' className='w-[200px] h-[100px] m-auto my-12 opacity-20'/>
        </div>
        
    </>
  )
}


