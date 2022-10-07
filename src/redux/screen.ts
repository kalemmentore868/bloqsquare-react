import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Screen {
  value: number;
}

// Define the initial state using that type
const initialState: Screen = {
  value: 0,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    incrementScreen: (state) => {
      state.value + 1 > 3 ? (state.value = 1) : state.value++;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementScreen } = screenSlice.actions;

export default screenSlice.reducer;
