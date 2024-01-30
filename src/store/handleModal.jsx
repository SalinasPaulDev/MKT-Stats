import {create} from 'zustand';
export const useHandleModal = create((set) => ({
    open: false,
    setOpen: (data) => set(() => ({open: data}))
}))