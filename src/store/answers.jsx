import { create } from 'zustand'

export const useAnswersStore = create((set) => ({
    firstAnswer: '',
    secondAnswer: '',
    updateValues: ({firstAnswer, secondAnswer}) => set(() => ({firstAnswer, secondAnswer}))
}))