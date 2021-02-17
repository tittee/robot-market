import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'Cart',
  initialState: {
    isActiveCart: false,
    carts: [],
    itemCart: [],
  },
  reducers: {
    setActiveCart: (state, action) => {
      state.isActiveCart = action.payload;
    },
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
    setItemCart: (state, action) => {
      state.itemCart = action.payload;
    },
  },
});

export const { setActiveCart, setCarts, setItemCart } = cartSlice.actions; //setSearchRobot
export default cartSlice.reducer;
