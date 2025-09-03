import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload,
      );
    },

    incrementCartQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decrementCartQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      // Shortcut technique to remove item if quantity is 0
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incrementCartQuantity,
  decrementCartQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.productId === id)?.quantity ?? 0;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
