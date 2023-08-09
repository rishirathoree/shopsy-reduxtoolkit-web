import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slices/Products'
import cartSlice from './Slices/Cart'

export const store = configureStore({
  reducer: {
    product:productSlice,
    cart:cartSlice,
  },
})