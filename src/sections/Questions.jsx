import { Bento } from "../components/Bento/Bento"
import { Header } from "./Header"


export const Questions = () => {
  return (
    <div>
      <Header />
      <h2 className="text-2xl font-semibold mt-10 text-center">Responde las siguientes preguntas para comenzar.</h2>
      <p className="text-center text-zinc-500">Elije una categoria a la vez para ir resolviendo las preguntas</p>

      <Bento />
    </div>
  )
}
