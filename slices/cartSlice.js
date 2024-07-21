import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const newCart = state.items.filter(
        (item) => item._id !== action.payload.id
      );
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// Selectors with createSelector to memoize results
export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = createSelector(
  [selectCartItems, (_, id) => id],
  (items, id) => items.filter((item) => item._id === id)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price, 0)
);

export default cartSlice.reducer;
