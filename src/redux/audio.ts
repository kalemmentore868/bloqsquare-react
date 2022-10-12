import { createSlice } from "@reduxjs/toolkit";

const timeSfxPath = "./audio/background-music.wav";

const opponentSfxPath = "./audio/opponent.wav";

const youSfxPath = "./audio/you.wav";

const endAudioPath = "./audio/end.wav";

interface AudioState {
  youSfxPath: string;
  opponentSfxPath: string;
  endAudioPath: string;
  timeSfxPath: string;
}

// Define the initial state using that type
const initialState: AudioState = {
  youSfxPath,
  opponentSfxPath,
  timeSfxPath,
  endAudioPath,
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = audioSlice.actions;

export default audioSlice.reducer;
