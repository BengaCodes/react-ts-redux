import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart-slice'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch

export default store
