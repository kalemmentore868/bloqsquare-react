import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Player from "../helpers/Player";

// Define the initial state using that type
const initialState: Player = {
  chosenColor: "#0000FF",
  totalPoints: 0,
  totalGamePoints: 0,
  isComputer: true,
};

export const machineSlice = createSlice({
  name: "machine",
  initialState,
  reducers: {
    setMachineScore: (state, action: PayloadAction<number>) => {
      return { ...state, totalPoints: action.payload };
    },
    incrementMachineScore: (state) => {
      return { ...state, totalPoints: state.totalPoints + 1 };
    },
    setMachineColor: (state, action: PayloadAction<string>) => {
      return { ...state, chosenColor: action.payload };
    },
    incrementTotalMachinePoints: (state) => {
      return {
        ...state,
        totalGamePoints: state.totalGamePoints + 1,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMachineColor,
  setMachineScore,
  incrementMachineScore,
  incrementTotalMachinePoints,
} = machineSlice.actions;

export default machineSlice.reducer;
