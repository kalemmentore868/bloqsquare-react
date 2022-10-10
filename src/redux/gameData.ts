import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  colors,
  squareInfo,
} from "../components/gameScreenComponents/version2/Square2";
import Cell from "../helpers/Cell";
import Grid2 from "../helpers/Grid2";

export interface LevelData {
  level: number;
  grid: {
    x: number;
    y: number;
  };
}

export interface GameData {
  levels: LevelData[];
  currentLevel: number;
}

// @ts-ignore
const levels = [{ level: 1, grid: { x: 1, y: 1 } }];

// Define the initial state using that type
const initialState: GameData = {
  levels,
  currentLevel: 0,
};

const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    incrementLevel: (state) => {
      return { ...state, currentLevel: state.currentLevel + 1 };
    },
    setGameData: (state, action: PayloadAction<LevelData[]>) => {
      const { x, y } = action.payload[state.currentLevel].grid;
      return { ...state, levels: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementLevel, setGameData } = gameDataSlice.actions;

export default gameDataSlice.reducer;
