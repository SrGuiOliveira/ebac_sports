import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  items: Produto[]
  favoritos: Produto[]
}

const initialState: CartState = {
  items: [],
  favoritos: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.items.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(produto)
      }
    },
    favorite: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const favoritoExistente = state.favoritos.find((p) => p.id === produto.id)
      if (favoritoExistente) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { add, favorite } = cartSlice.actions
export default cartSlice.reducer
