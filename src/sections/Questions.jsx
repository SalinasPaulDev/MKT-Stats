import { Link, ScrollRestoration } from "react-router-dom"
import { Bento } from "../components/Bento/Bento"


export const Questions = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-10 text-center">Responde las siguientes preguntas para comenzar.</h2>
      <p className="text-center text-zinc-500">Elije una categoria a la vez para ir resolviendo las preguntas</p>

      <Bento />

    <Link to={'/results'} className="w-full flex justify-center">
      <button className="mb-8  bg-blue-500 py-2 px-4 rounded-2xl font-semibold text-white m-auto text-xl text-center hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out "> Resultados</button>
      </Link>

      <ScrollRestoration />
    </div>
  )
}
