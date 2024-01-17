import ReactEcharts from "echarts-for-react"; 
import { useEffect, useRef } from "react";
import Logo from '/LogoEmpresa.svg'




const option = {
  title: {
    text: '',
    subtext: '',
    left: ''
  },
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
        { value: 30, name: 'Document.' },
        { value: 28, name: 'Estrategia' },
        { value: 26, name: 'Equipo' },
        { value: 24, name: 'Identidad' }
      ]
    }
  ]
};

export const Results = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const handleSeriesSize = () => {
        if(windowSize.current[0] < 400 ) {
            option.series[0].radius[1] = 60
            option.series[0].center[1] = '50%'
        }
    }

    useEffect(() => {
        handleSeriesSize()
    }, [])


  return (
    <div className="px-20">
        <div className="w-full flex flex-col justify-center items-center gap-8 md:flex-row md:gap-1">
            <div className="w-2/3">
                <ReactEcharts  className="mt-8 text-center m-auto" option={option}/>
            </div>
            <img src={Logo} width={200} className="opacity-60"/>
        </div>
        <h3 className="font-bold text-4xl text-center mt-12">Resultados</h3>
        
        <div className="flex flex-col justify-center items-center my-20 gap-12 ">
            <div className="w-2/3">
            <h4 className="text-2xl font-semibold">Aprobadas</h4>
            <ul className="my-4">
                <li>✅ Propósito fundamental debidamente documentado (Por qué y para qué)</li>
                <li>✅ Manifiesto de marca Valores y comportamientos observables</li>
            </ul>
            </div>
            <div className="w-2/3">
            <h4 className="text-2xl font-semibold">Desaprobadas</h4>
            <ul className="my-4">
                <li>❌ Definición de audiencias objetivas (internas, externas, estratégicas, comerciales, etc.)</li>
                <li>❌ Definición y documentación de portafolio (productos y/o servicios)</li>
            </ul>
            </div>
        </div>
    </div>
  )
}
