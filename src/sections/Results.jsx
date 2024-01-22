import ReactEcharts from "echarts-for-react"; 
import { useEffect, useRef } from "react";
import Logo from '/LogoEmpresa.svg'
import { useDocumentationAnswersStore, useStrategyAnswersStore } from "../store/answers";
import { getApproveQuestions, getPercentage, getPercentageToAnswers } from "../utils";




const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: ['rose1', 'rose2', 'rose3', 'rose4'],
    show: true
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: false },
      saveAsImage: { show: true }
    },
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: [25, 120],
      center: ['50%', '60%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5,
        position: 'center',
      },
      data: [
        { value: 0, name: 'Document.' },
        { value: 0, name: 'Estrategia' },
        { value: 60, name: 'Equipo' },
        { value: 60, name: 'Identidad' }
      ]
    }
  ]
};

export const Results = () => {
    const windowSize = useRef(window.innerWidth);
    const {updateValues: updateDocumentsValues, ...documentAnswers} = useDocumentationAnswersStore((state) => state)
    const {updateValues: updateStrategyValues, ...strategyAnswers} = useStrategyAnswersStore((state) => state)

    const handleSeriesSize = () => {
        if(windowSize.current < 400 ) {
            option.series[0].radius[1] = 60
            option.series[0].center[1] = '50%'
        }
    }

    const addPercentageByCategory = () => {
      option.series[0].data.map(x => {
        if(x.name === 'Document.'){
          x.value = getPercentageToAnswers(documentAnswers)
        }
        if(x.name === 'Estrategia'){
          x.value = getPercentageToAnswers(strategyAnswers)
        }
      })

    }

    useEffect(() => {
        handleSeriesSize()
        addPercentageByCategory()
    }, [])

    
    console.log(getApproveQuestions(documentAnswers, 'approve'))

  return (
    <div className="px-4 md:px-20">
        <div className="w-full flex flex-col justify-center items-center gap-8 md:flex-row md:gap-1">
            <div className="w-full md:w-2/3">
                <ReactEcharts  className="mt-8 text-center m-auto" option={option}/>
            </div>
            <img src={Logo} width={200} className="opacity-60"/>
        </div>
        <h3 className="font-bold text-4xl text-center mt-12">Resultados</h3>
        
        <div className="flex flex-col justify-center items-center my-20 gap-12 ">
            <div className="md:w-2/3">
            <h4 className="text-2xl font-semibold">Aprobadas</h4>
            <ul className="my-4">
              {
                getApproveQuestions(documentAnswers, 'approve').map((x) => (
                  <li>✅ {x.question}</li>
                ))
              }

            </ul>
            </div>
            <div className="md:w-2/3">
            <h4 className="text-2xl font-semibold">Desaprobadas</h4>
            <ul className="my-4">
            {
                getApproveQuestions(documentAnswers, 'decline').map((x) => (
                  <li>❌ {x.question}</li>
                ))
              }

            </ul>
            </div>
        </div>
    </div>
  )
}
