import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, name, price, image, quantity}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(i => i.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
