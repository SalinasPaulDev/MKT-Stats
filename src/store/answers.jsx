import { create } from 'zustand'

export const useDocumentationAnswersStore = create((set) => ({
    documentedAnswer: '',
    manifestAnswer: '',
    audienceAnswer: '',
    portfolioAnswer: '',
    updateValues: (key, answer) => set(() => ({[key]: answer}))
}))