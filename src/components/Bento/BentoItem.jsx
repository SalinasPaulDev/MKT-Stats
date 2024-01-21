import { CircularProgress } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { getPercentage } from "../../utils"


export const BentoItem = ({title, className, image, percentege, path}) => {


  console.log(percentege)
  
  return (
    <div className={`
    ${className}
    relative rounded-xl
    backdrop-blur-md
    border border-blue/10
    shadow-inner shadow-black/10
    group

    `}
    
    >
        <div className="absolute z-0 bottom-0 top-0 w-full h-full bg-gradient-to-t from-transparent from-40%-transparent via-black/50 to-black/80 rounded-xl  group-hover:scale-105 transition-scale duration-500 ease-in-out"></div>
        <div style={{backgroundImage: `url(${image})`}} className="left-0 top-0 bottom-0 absolute -z-20 bg-cover bg-center bg-no-repeat w-full h-full rounded-xl group-hover:scale-105 transition-scale duration-500 ease-in-out opacity-90 bg-blend-luminosity "/>


        <div className="relative flex flex-col gap-4 justify-between p-4 items-center md:flex-row">

        <h3 className="font-semibold text-white">{title}</h3>

        <CircularProgress value={percentege ? percentege : 0} showValueLabel color={percentege === 100 ? "success" : "warning"} className="text-white md:hidden" size="lg" />

        <Link to={`/questions/${path}`}>
            <button className="bg-indigo-500/80 px-4 py-1 rounded-2xl text-white right-0 hover:bg-indigo-500/90 hover:text-white transition duration-500">Continuar</button>
        </Link>
        </div>     
        <div className="flex items-center justify-center mt-2 max-md:hidden">
        <CircularProgress value={percentege ? percentege : 0} showValueLabel color={percentege === 100 ? "success" : "warning"} className="text-white" size="lg" />
        </div>    
    </div>
  )
}
