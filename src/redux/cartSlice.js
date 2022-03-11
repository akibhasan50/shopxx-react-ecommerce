import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  quantity:0,
  total:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state,action) => {
        console.log(action.payload);
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;

    },
    removeProduct: (state,action) => {
        
        state.quantity -= 1;
        state.products.pop(action.payload);
        state.total -= action.payload.price;
  
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct} = cartSlice.actions

export default cartSlice.reducer