import { createSlice } from '@reduxjs/toolkit';

const robotSlice = createSlice({
  name: 'Robot',
  initialState: {
    isActiveRobot: false,
    currentRobot: null,
    robots: [],
    // searchRobot: '',
  },
  reducers: {
    setActiveRobot: (state, action) => {
      state.isActiveRobot = action.payload;
    },
    setCurrentRobot: (state, action) => {
      state.currentRobot = action.payload;
    },
    setRobots: (state, action) => {
      state.robots = action.payload;
    },
    // setSearchRobot: (state, action) => {
    //   state.searchRobot = action.payload;
    // },
  },
});

export const { setActiveRobot, setCurrentRobot, setRobots } = robotSlice.actions; //setSearchRobot
export default robotSlice.reducer;
