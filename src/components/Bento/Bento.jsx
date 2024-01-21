import { BentoItem } from "./BentoItem"
import IdentityImage from '/identidad.webp'
import DocumentationImage from '/documentacion.webp'
import TeamImage from '/equipo.webp'
import StrategyImage from '/estrategia.webp'
import { useDocumentationAnswersStore, useStrategyAnswersStore } from "../../store/answers"
import { getPercentage } from "../../utils"


export const Bento = () => {
  const {updateValues: documentUpdateValues, ...documentaryAnswers} = useDocumentationAnswersStore((state) => state)
  const {updateValues : strategyUpdateValues, ...strategyAnswers} = useStrategyAnswersStore((state) => state)


  return (
    <article className="
        w-full max-w-[1400px]
        grid grid-cols-10 auto-rows-[17rem] gap-4
        mx-auto p-20
    ">
    <BentoItem className="col-span-10 md:col-span-6" title="Documentación" path="documentation" image={DocumentationImage} percentege={getPercentage(documentaryAnswers)}/>
    <BentoItem className="col-span-10 md:col-span-4" title="Estrategia" path="strategy" image={StrategyImage}  percentege={getPercentage(strategyAnswers)}/>
    <BentoItem className="col-span-10 md:col-span-4" title="Identidad" path=""  image={IdentityImage} />
    <BentoItem className="col-span-10 md:col-span-6" title="Equipo" path="" image={TeamImage} />

    </article>
  )
}
