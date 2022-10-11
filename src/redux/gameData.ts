import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colors, squareInfo } from "../components/gameScreenComponents/Square";
import Cell from "../helpers/Cell";
import Grid2 from "../helpers/Grid2";

export interface LevelData {
  level: number;
  grid: {
    x: number;
    y: number;
  };
  grade: number;
}

export interface GameData {
  levels: LevelData[];
  currentLevel: number;
}

// Define the initial state using that type
const initialState: GameData = {
  levels: [],
  currentLevel: 0,
};

const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    incrementLevel: (state) => {
      return {
        ...state,
        currentLevel: state.currentLevel === 7 ? 0 : state.currentLevel + 1,
      };
    },
    resetLevel: (state) => {
      return {
        ...state,
        currentLevel: 0,
      };
    },
    setGameData: (state, action: PayloadAction<LevelData[]>) => {
      return { ...state, levels: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementLevel, setGameData, resetLevel } =
  gameDataSlice.actions;

export default gameDataSlice.reducer;
