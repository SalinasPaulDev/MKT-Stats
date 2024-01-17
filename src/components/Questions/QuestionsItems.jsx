import { Link } from 'react-router-dom'
import Logo from '/logo.svg'
import { useDocumentationAnswersStore } from '../../store/answers'
import { useState } from 'react'
const questions = [
    {
        question: 'Propósito fundamental debidamente documentado (Por qué y para qué)',
        answer: 'No',
        key: 'documentedAnswer'
    },
    {
        question: 'Manifiesto de marca Valores y comportamientos observables',
        answer: 'No',
        key: 'manifestAnswer'
    },
    {
        question: 'Definición de audiencias objetivas (internas, externas, estratégicas, comerciales, etc.)',
        answer: 'No',
        key: 'audienceAnswer'
    },
    {
        question: 'Definición y documentación de portafolio (productos y/o servicios)',
        answer: 'No',
        key:'portfolioAnswer'
    },
]

const OPTIONS = {
    YES : 'yes',
    NO: 'no',
    EMPTY: ''
}

export const QuestionsItems = () => {

    const [isChecked, setIsChecked] = useState(OPTIONS.EMPTY)


    const {updateValues, ...storeQuestions} = useDocumentationAnswersStore((state) => state)

    const isCheckedv2 =  (key) => {
        let questionFound = Object.keys(storeQuestions).find(x => x === key)

         console.log({za:storeQuestions[questionFound], questionFound})

         if(storeQuestions[questionFound] === 'yes') {
            return OPTIONS.YES
         }
         if(storeQuestions[questionFound] === 'no') {
            
            return OPTIONS.NO
         }else {
            return OPTIONS.EMPTY
         }
         
    }

    


  return (
    <div className='p-8 md:p-16 lg:w-full' >
        <img src={Logo} className='w-20 text-center m-auto my-20'/>

        <h3 className='font-semibold text-2xl mb-4 text-center'>Resuelve las preguntas: </h3>

        <div className='flex flex-col gap-4 justify-center item-center lg:w-fit m-auto'>

        {
            questions.map((question, index) => (
                <div key={question.question} className='border-blue-500 min-h-14 bg-indigo-600/5 max-w-[800px] rounded-xl p-4 lg:min-w-max'>
                    <p>{`${index + 1} - ${question.question}`}</p>
                    <div className='inline-flex items-center gap-4 mt-4 ml-4'>
                        <label className='flex items-center gap-2'>
                            <p>Si</p>
                            <input type='radio' value={'yes'} name={question.question} onChange={({target}) =>  updateValues(question.key,target.value)} checked={isCheckedv2(question.key) === OPTIONS.YES ? true : false}/>
                        </label>

                        <label className='flex items-center gap-2'>
                            <p>No</p>
                            <input type='radio' value={'no'} name={question.question} onChange={({target}) =>  updateValues(question.key,target.value)}  checked={isCheckedv2(question.key) === OPTIONS.NO ? true : false}/>
                        </label>
                    </div>
                </div>
            ))
        }
        </div>

        <Link to={'/questions'} className='flex justify-center'>
            <button className='px-6 py-4 bg-indigo-600 text-xl font-semibold  my-10 rounded-3xl text-white md:text-xl hover:bg-indigo-600/90 transition duration-300'>Continuar</button>
        </Link>
    </div>
  )
}
