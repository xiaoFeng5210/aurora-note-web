import { create } from 'zustand'

interface SlideBarState {
  currentSelectKey: string
}

export const useSlideBarStore = create<SlideBarState>(() => ({
  currentSelectKey: '',
}))

export const setCurrentSelectKey = (key: string) => {
  useSlideBarStore.setState({ currentSelectKey: key })
}

