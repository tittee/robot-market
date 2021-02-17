import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'Cart',
  initialState: {
    isActiveCart: false,
    carts: [],
    pageCount: 0,
    offset: 0,
  },
  reducers: {
    setActiveCart: (state, action) => {
      state.isActiveCart = action.payload;
    },
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { setActiveCart, setCarts } = cartSlice.actions; //setSearchRobot
export default cartSlice.reducer;
