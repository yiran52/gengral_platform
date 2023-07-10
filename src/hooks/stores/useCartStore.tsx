import create from 'zustand'

type CartItem = {
  id: string
  name: string
  price: number
}

type CartStore = {
  items: CartItem[]
  total: number
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  total: 0,
  addItem: (item) =>
    set((state) => {
      const items = [...state.items, item]
      const total = items.reduce((total, item) => total + item.price, 0)
      return { items, total }
    }),
  removeItem: (id) =>
    set((state) => {
      const items = state.items.filter((item) => item.id !== id)
      const total = items.reduce((total, item) => total + item.price, 0)
      return { items, total }
    })
}))
