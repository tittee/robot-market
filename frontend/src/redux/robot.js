import { createSlice } from '@reduxjs/toolkit';

const robotSlice = createSlice({
  name: 'Robot',
  initialState: {
    isActiveRobot: false,
    currentRobot: null,
    robot: [],
    robots: [],    
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
  },
});

export const { setActiveRobot, setCurrentRobot, setRobot, setRobots } = robotSlice.actions; //setSearchRobot
export default robotSlice.reducer;
