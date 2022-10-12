import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Player from "../helpers/Player";

// Define the initial state using that type
const initialState: Player = {
  chosenColor: "#FF0000",
  totalPoints: 0,
  totalGamePoints: 0,
  isComputer: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerScore: (state, action: PayloadAction<number>) => {
      return { ...state, totalPoints: action.payload };
    },
    incrementPlayerScore: (state) => {
      return { ...state, totalPoints: state.totalPoints + 1 };
    },
    setPlayerColor: (state, action: PayloadAction<string>) => {
      return { ...state, chosenColor: action.payload };
    },
    incrementTotalPlayerPoints: (state) => {
      return {
        ...state,
        totalGamePoints: state.totalGamePoints + 1,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPlayerColor,
  setPlayerScore,
  incrementPlayerScore,
  incrementTotalPlayerPoints,
} = playerSlice.actions;

export default playerSlice.reducer;
