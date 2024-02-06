import { Link, ScrollRestoration, useLocation, useParams } from 'react-router-dom'
import Logo from '/logo.svg'
import { useDocumentationAnswersStore, useIdentityAnswersStore, useStrategyAnswersStore } from '../../store/answers'
import { useEffect, useState } from 'react'
import { documentQuestions, identityQuestions, strategyQuestions } from '../../utils/questions'
import { Button } from '../Button/Button'
import { getApproveQuestions } from '../../utils'


export const OPTIONS = {
    YES : 'yes',
    NO: 'no',
    EMPTY: ''
}

export const QuestionsItems = () => {
    const [currentQuestion, setCurrentQuestion] = useState([])
    const location = useLocation()

    const {updateValues: updateDocumentationValues, ...storeQuestions} = useDocumentationAnswersStore((state) => state)
    const {updateValues : updateStrategyValues, ...strategyAnswers} = useStrategyAnswersStore((state) => state)
    const {updateValues : updateIdentityValues, ...identityAnswers} = useIdentityAnswersStore((state) => state)

    const currentLocation = location.pathname

    const showQuestionsByCategory = () => {
        if(currentLocation === '/questions/documentation') {
            setCurrentQuestion(documentQuestions)
        }else if (currentLocation === '/questions/strategy') {
            setCurrentQuestion(strategyQuestions)
        }else if (currentLocation === '/questions/identity') {
            setCurrentQuestion(identityQuestions)
        }
    }

    const handleUpdateValues = (key, value) => {
        if(currentLocation === '/questions/documentation') {
            updateDocumentationValues(key, value)
        }else if (currentLocation === '/questions/strategy') {
            updateStrategyValues(key,value)
        }else if (currentLocation === '/questions/identity') {
            updateIdentityValues(key,value)
        }
    }

    useEffect(() => {
        showQuestionsByCategory()
    }, [location.pathname])


    const isCheckedv2 =  (key) => {
        let questionFound

        if(currentLocation === '/questions/documentation'){
            questionFound = Object.keys(storeQuestions).find(x => x === key)
            if(storeQuestions[questionFound] === 'yes') {
                return OPTIONS.YES
             }
             if(storeQuestions[questionFound] === 'no') {
                
                return OPTIONS.NO
             }else {
                return OPTIONS.EMPTY
             }
        }else if (currentLocation === '/questions/strategy') {
            questionFound = Object.keys(strategyAnswers).find(x => x === key)
            if(strategyAnswers[questionFound] === 'yes') {
                return OPTIONS.YES
             }
             if(strategyAnswers[questionFound] === 'no') {
                
                return OPTIONS.NO
             }else {
                return OPTIONS.EMPTY
             }
        }else if (currentLocation === '/questions/identity') {
            questionFound = Object.keys(identityAnswers).find(x => x === key)
            if(identityAnswers[questionFound] === 'yes') {
                return OPTIONS.YES
             }
             if(identityAnswers[questionFound] === 'no') {
                
                return OPTIONS.NO
             }else {
                return OPTIONS.EMPTY
             }
        }


         
    }

    


  return (
    <div  className='lg:w-full ' >
        <div style={{backgroundImage: 'url("/wave.svg")'}}  className='bg-no-repeat bg-center bg-cover relative top-0 left-0 right-0 py-28 bg-opacity-10'>
            <img src={Logo} className='w-20 text-center m-auto mb-16'/>

            <h3 className='font-semibold text-2xl  mb-4 text-center text-white pb-8'>Resuelve las preguntas: </h3>
        </div>

        <div className='flex flex-col gap-4 justify-center item-center lg:w-fit m-auto p-8 md:p-16'>

        {
            currentQuestion.map((question, index) => (
                <div key={question.question} className='border-blue-500 min-h-14 bg-indigo-600/5 max-w-[800px] rounded-xl p-4 lg:min-w-max'>
                    <p>{`${index + 1} - ${question.question}`}</p>
                    <div className='inline-flex items-center gap-4 mt-4 ml-4'>
                        <label className='flex items-center gap-2'>
                            <p>Si</p>
                            <input type='radio' value={'yes'} name={question.question} onChange={({target}) =>  handleUpdateValues(question.key,target.value)} checked={isCheckedv2(question.key) === OPTIONS.YES ? true : false}/>
                        </label>

                        <label className='flex items-center gap-2'>
                            <p>No</p>
                            <input type='radio' value={'no'} name={question.question} onChange={({target}) =>  handleUpdateValues(question.key,target.value)}  checked={isCheckedv2(question.key) === OPTIONS.NO ? true : false}/>
                        </label>
                    </div>
                </div>
            ))
        }
        </div>

        <div className='flex justify-center mb-20'>
            <Button link={'/questions'} text={'Continuar'}/>
        </div>
        <ScrollRestoration />
    </div>
  )
}
