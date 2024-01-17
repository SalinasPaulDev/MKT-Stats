export const getPercentage = (total) => {

    let questionsLength = Object.keys(total).length

    let answersDone = Object.values(total).filter((value) => value !== '')

    let respuesta = 100 / questionsLength * answersDone.length

    return(Math.round(respuesta))
}