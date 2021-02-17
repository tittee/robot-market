import { createSlice } from '@reduxjs/toolkit';

const robotSlice = createSlice({
  name: 'Robot',
  initialState: {
    isActiveRobot: false,
    currentRobot: null,
    robots: [],
    pageCount: 0,
    offset: 0,
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
    setPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
  },
});

export const { setActiveRobot, setCurrentRobot, setRobots, setPageCount, setOffset } = robotSlice.actions; //setSearchRobot
export default robotSlice.reducer;
