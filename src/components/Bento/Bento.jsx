import { BentoItem } from "./BentoItem"
import IdentityImage from '/identidad.jpg'
import DocumentationImage from '/documentacion.jpg'
import TeamImage from '/equipo.jpg'
import StrategyImage from '/estrategia.jpg'


export const Bento = () => {
  return (
    <article className="
        w-full max-w-[1400px]
        grid grid-cols-10 auto-rows-[15rem] gap-4
        mx-auto p-20
    ">
    <BentoItem className="col-span-10 md:col-span-6" title="Documentación" description="" image={DocumentationImage}/>
    <BentoItem className="col-span-10 md:col-span-4" title="Estrategia" description="" image={StrategyImage}/>
    <BentoItem className="col-span-10 md:col-span-4" title="Identidad" description=""  image={IdentityImage}/>
    <BentoItem className="col-span-10 md:col-span-6" title="Equipo" description="" image={TeamImage}/>

    </article>
  )
}
