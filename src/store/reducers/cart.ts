import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../pages/01_Home'

type CartState = {
  items: {
    restaurant: Restaurant
    dish: Restaurant['cardapio'][0]
  }[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{
        restaurant: Restaurant
        dish: Restaurant['cardapio'][0]
      }>
    ) => {
      const item = state.items.find(
        (cartItem) =>
          cartItem.restaurant.id === action.payload.restaurant.id &&
          cartItem.dish.id === action.payload.dish.id
      )
      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (
      state,
      action: PayloadAction<{ restaurantId: number; dishId: number }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.restaurant.id === action.payload.restaurantId &&
            item.dish.id === action.payload.dishId
          )
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
