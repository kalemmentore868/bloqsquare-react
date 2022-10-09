import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LevelData {
  level: number;
  grid: {
    x: number;
    y: number;
  };
}

interface GameData {
  levels: LevelData[];
  currentLevel: number;
}
async function getLevels(): Promise<LevelData[]> {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/7510f3ce-0209-4180-9c3f-cf42bdc82db6"
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return [{ level: 1, grid: { x: 7, y: 14 } }];
  }
}

// @ts-ignore
const levels: LevelData[] = getLevels();

// Define the initial state using that type
const initialState: GameData = {
  levels,
  currentLevel: 1,
};

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    incrementLevel: (state) => {
      return { ...state, currentLevel: state.currentLevel + 1 };
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementLevel } = gameDataSlice.actions;

export default gameDataSlice.reducer;
