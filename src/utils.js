import { OPTIONS } from "./components/Questions/QuestionsItems"
import { documentQuestions } from "./utils/questions"

export const getPercentage = (total) => {

    let questionsLength = Object.keys(total).length

    let answersDone = Object.values(total).filter((value) => value !== '')

    let respuesta = 100 / questionsLength * answersDone.length

    return(Math.round(respuesta))
}

export const getPercentageToAnswers = (total) => {

    let answers = Object.values(total) //["no", yes]

    let answersYes = answers.filter((value) => value === OPTIONS.YES)

    let respuesta = (100 / answers.length) * answersYes.length

    return(Math.round(respuesta))
}

export const getApproveQuestions = (answers, find) => {
    const filteredAnswers = Object.entries(answers)
    const approveKeysQuestion = filteredAnswers.filter(x => x[1] === OPTIONS.YES).map(x => x[0])
    const negativeKeysQuestion = filteredAnswers.filter(x => x[1] === OPTIONS.NO).map(x => x[0])
    let approveQuestions = []
    let declineQuestions = []

    if(approveKeysQuestion.length) {
        documentQuestions.forEach(x => {
            approveKeysQuestion.forEach(z => z === x.key && approveQuestions.push(x))
        })
    }

    if(negativeKeysQuestion.length){
        documentQuestions.forEach(x => {
            negativeKeysQuestion.forEach(z => z === x.key && declineQuestions.push(x))
        })
    }

    
    if(find === 'approve'){
        return approveQuestions
    }else if (find === 'decline') {
        return declineQuestions
    }
}