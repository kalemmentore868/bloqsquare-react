import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Howl } from "howler";

const timeSFx = new Howl({
  src: ["./audio/background-music.wav"],
  html5: true,
  preload: true,
  volume: 0.15,
});

const opponentFx = new Howl({
  src: ["./audio/opponent.wav"],
  html5: true,
  preload: true,
});
const youFx = new Howl({
  src: ["./audio/you.wav"],
  html5: true,
  preload: true,
  volume: 1,
});

const endAudio = new Howl({
  src: ["./audio/end.wav"],
  html5: true,
  preload: true,
});

interface AudioState {
  bgMusic: Howl;
  opponentMusic: Howl;
  playerMusic: Howl;
  endAudio: Howl;
}

// Define the initial state using that type
const initialState: AudioState = {
  bgMusic: timeSFx,
  opponentMusic: opponentFx,
  playerMusic: youFx,
  endAudio,
};

export const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = audioSlice.actions;

export default audioSlice.reducer;
