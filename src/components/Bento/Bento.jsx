import { BentoItem } from "./BentoItem"
import IdentityImage from '/identidad.webp'
import DocumentationImage from '/documentacion.webp'
import TeamImage from '/equipo.webp'
import StrategyImage from '/estrategia.webp'
import { useDocumentationAnswersStore } from "../../store/answers"
import { getPercentage } from "../../utils"


export const Bento = () => {
  const {updateValues, ...answers} = useDocumentationAnswersStore((state) => state)

  return (
    <article className="
        w-full max-w-[1400px]
        grid grid-cols-10 auto-rows-[17rem] gap-4
        mx-auto p-20
    ">
    <BentoItem className="col-span-10 md:col-span-6" title="Documentación" description="" image={DocumentationImage} percentege={getPercentage(answers)}/>
    <BentoItem className="col-span-10 md:col-span-4" title="Estrategia" description="" image={StrategyImage} />
    <BentoItem className="col-span-10 md:col-span-4" title="Identidad" description=""  image={IdentityImage} />
    <BentoItem className="col-span-10 md:col-span-6" title="Equipo" description="" image={TeamImage} />

    </article>
  )
}
