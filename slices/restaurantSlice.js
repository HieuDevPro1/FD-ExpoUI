import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    restaurant: null,
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    value: 0
  },
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = state=> state.restaurant.restaurant;

export default restaurantSlice.reducer