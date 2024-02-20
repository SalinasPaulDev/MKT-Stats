import {create} from 'zustand'

export const useDocumentationAnswersStore = create((set) => ({
	documentedAnswer: '',
	manifestAnswer: '',
	audienceAnswer: '',
	portfolioAnswer: '',
	updateValues: (key, answer) => set(() => ({[key]: answer})),
}))

export const useStrategyAnswersStore = create((set) => ({
	architectureBrand: '',
	proposalValue: '',
	marketingStrategy: '',
	comunicationPlan: '',
	positioningStrategy: '',
	performanceStrategy: '',
	desiredPositioning: '',
	updateValues: (key, answer) => set(() => ({[key]: answer})),
}))

export const useIdentityAnswersStore = create((set) => ({
	namingAnswer: '',
	brandRegisterAnswer: '',
	logoAnswer: '',
	personalityAnswer: '',
	lineamentAnswer: '',
	brandExperienceAnswer: '',
	updateValues: (key, answer) => set(() => ({[key]: answer})),
}))

export const useTeamWorkAnswersStore = create((set) => ({
	teamMKT: {answer: '', details: ''},
	comunicationTeam: {answer: '', details: ''},
	digitalStrategy: {answer: '', details: ''},
	MKTbudget: {answer: '', details: ''},
	updateValues: (key, answer, details) =>
		set((state) => ({
			[key]: {
				...state[key],
				answer: answer || state[key].answer,
				details: details,
			},
		})),
}))
