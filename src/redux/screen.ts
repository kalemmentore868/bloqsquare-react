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
    setScreen: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScreen } = screenSlice.actions;

export default screenSlice.reducer;
