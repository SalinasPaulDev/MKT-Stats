import { BentoItem } from "./BentoItem"
import { useDocumentationAnswersStore, useStrategyAnswersStore } from "../../store/answers"
import { getPercentage } from "../../utils"



export const Bento = () => {
  const {updateValues: documentUpdateValues, ...documentaryAnswers} = useDocumentationAnswersStore((state) => state)
  const {updateValues : strategyUpdateValues, ...strategyAnswers} = useStrategyAnswersStore((state) => state)

  const isResultsActive = getPercentage(documentaryAnswers) === 100 && getPercentage(strategyAnswers) === 100 ? true : false

  console.log(isResultsActive)


  return (
    <article className="
        w-full max-w-[1400px]
        grid grid-cols-10 auto-rows-[17rem] gap-4
        mx-auto px-8 md:px-20 py-4
    ">
    <BentoItem className="col-span-10 md:col-span-6" title="Documentación" path="documentation" image={'/documentacion.webp'} percentege={getPercentage(documentaryAnswers)}/>
    <BentoItem className="col-span-10 md:col-span-4" title="Estrategia" path="strategy" image={'/estrategia.webp'}  percentege={getPercentage(strategyAnswers)}/>
    <BentoItem className="col-span-10 md:col-span-4" title="Identidad" path=""  image={'/identidad.webp'} />
    <BentoItem className="col-span-10 md:col-span-6" title="Equipo" path="" image={'/equipo.webp'} />
    </article>
  )
}
