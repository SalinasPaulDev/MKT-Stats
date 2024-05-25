import {create} from 'zustand'
export const useHandleData = create((set) => ({
	email: '',
	setData: ({email}) => set(() => ({email})),
}))
