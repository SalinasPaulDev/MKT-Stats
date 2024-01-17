import ReactEcharts from "echarts-for-react"; 
import { useEffect, useRef } from "react";




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
        { value: 30, name: 'document.' },
        { value: 28, name: 'Estrategia' },
        { value: 26, name: 'equipo' },
        { value: 24, name: 'Brand' }
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
        console.log(option)
    }

    useEffect(() => {
        handleSeriesSize()
    }, [])


  return (
    <ReactEcharts  className="mt-8 text-center m-auto" option={option}/>
  )
}
