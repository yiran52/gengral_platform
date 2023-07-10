import create from 'zustand'

type User = {
  name: string
  email: string
}

type UserStore = {
  user: User | null
  count: number
  login: (user: User) => void
  logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  count: 1,
  login: (user) => set({ user }),
  logout: () => set({ user: null })
}))
