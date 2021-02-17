import { createSlice } from '@reduxjs/toolkit';

const robotSlice = createSlice({
  name: 'Robot',
  initialState: {
    isActiveRobot: false,
    currentRobot: null,
    robot: [],
    robots: [],
    stock: 0,
    outOfStock: false,
  },
  reducers: {
    setActiveRobot: (state, action) => {
      state.isActiveRobot = action.payload;
    },
    setCurrentRobot: (state, action) => {
      state.currentRobot = action.payload;
    },
    setRobot: (state, action) => {
      state.robot = action.payload;
    }, 
    setRobots: (state, action) => {
      state.robots = action.payload;
    }, 
    setStock: (state, action) => {
      state.stock = action.payload;
    },
    setOutOfStock: (state, action) => {
      state.outOfStock = action.payload;
    },
  },
});

export const { setActiveRobot, setCurrentRobot, setRobot, setRobots, setStock, setOutOfStock } = robotSlice.actions; //setSearchRobot
export default robotSlice.reducer;
