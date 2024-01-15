import { Link } from 'react-router-dom'
import Logo from '/logo.svg'
const questions = [
    {
        question: 'Propósito fundamental debidamente documentado (Por qué y para qué)',
        answer: 'No'
    },
    {
        question: 'Manifiesto de marca Valores y comportamientos observables',
        answer: 'No'
    },
    {
        question: 'Definición de audiencias objetivas (internas, externas, estratégicas, comerciales, etc.)',
        answer: 'No'
    },
    {
        question: 'Definición y documentación de portafolio (productos y/o servicios)',
        answer: 'No'
    },
]

export const QuestionsItems = () => {
  return (
    <div className='p-8 md:p-16'>
        <img src={Logo} className='w-20 text-center m-auto my-20'/>

        <h3 className='font-semibold text-2xl mb-4 '>Resuelve las preguntas: </h3>

        <div className='flex flex-col gap-4 justify-center item-center'>

        {
            questions.map((question, index) => (
                <div key={question} className='border-blue-500 min-h-14 bg-indigo-600/5 max-w-[800px] rounded-xl p-4'>
                    <p>{`${index + 1} - ${question.question}`}</p>
                    <div className='inline-flex items-center gap-4 mt-4 ml-4'>
                        <label className='flex items-center gap-2'>
                            <p>Si</p>
                            <input type='radio' name={question.question}/>
                        </label>

                        <label className='flex items-center gap-2'>
                            <p>No</p>
                            <input type='radio' name={question.question}/>
                        </label>
                    </div>
                </div>
            ))
        }
        </div>

        <Link to={'/questions'}>
            <button className='px-6 py-4 bg-indigo-600/60 text-xl font-semibold float-right my-10 rounded-3xl text-white md:text-xl hover:bg-indigo-600/90 transition duration-300'>Continuar</button>
        </Link>
    </div>
  )
}
