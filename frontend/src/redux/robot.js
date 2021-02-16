import { createSlice } from '@reduxjs/toolkit';

const robotSlice = createSlice({
  name: 'Robot',
  initialState: {
    isActiveRobot: false,
    currentAnno: null,
    robots: [],
  },
  reducers: {
    setActiveRobot: (state, action) => {
      state.isActiveRobot = action.payload;
    },
    setCurrentRobot: (state, action) => {
      state.currentAnno = action.payload;
    },
    setRobots: (state, action) => {
      state.robots = action.payload;
    },
  },
});

export const { setActiveRobot, setCurrentRobot, setRobots } = robotSlice.actions;
export default robotSlice.reducer;
