import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
}

export type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

type AddItemAction = {
  id: string
  title: string
  price: number
}

type RemoveItemAction = CartItem['id']

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: CartState, action: PayloadAction<AddItemAction>) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push({
          ...newItem,
          quantity: 1
        })
      }
    },
    removeItem(state: CartState, action: PayloadAction<RemoveItemAction>) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id)
        } else {
          existingItem.quantity--
        }
      }
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
