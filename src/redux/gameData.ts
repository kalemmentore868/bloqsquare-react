import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "howler";

export interface GameSettings {
  countDown: number;
  computerSpeed: number;
  ratioToWinRound: number;
  ratioDuration: number;
  lastLevel: number;
}

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
  gameState: string;
  gameSettings: GameSettings;
}

// Define the initial state using that type
const initialState: GameData = {
  levels: [],
  currentLevel: 0,
  gameState: "start",
  gameSettings: {
    countDown: 10000,
    computerSpeed: 1200,
    ratioToWinRound: 0.75,
    ratioDuration: 5000,
    lastLevel: 7,
  },
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
    setGameState: (state, action: PayloadAction<string>) => {
      return { ...state, gameState: action.payload };
    },
    setLastLevel: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          lastLevel: action.payload,
        },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementLevel,
  setGameData,
  resetLevel,
  setGameState,
  setLastLevel,
} = gameDataSlice.actions;

export default gameDataSlice.reducer;
