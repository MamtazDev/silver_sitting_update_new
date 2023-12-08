import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  registerPage: {
    step: 1,
    heading: false,
  },
  accessToken: undefined,
  user: undefined,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setStepControll: (state, action) => {
      if (action.payload === "childcarer") {
        state.registerPage.step = 2;
        state.registerPage.heading = true;
        return;
      }
      if (action.payload === "parents") {
        state.registerPage.step = 2;
        state.registerPage.heading = false;
        return;
      } else {
        state.registerPage.step = state.registerPage.step + 1;
      }
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export default registerSlice.reducer;
export const { setStepControll, setRole, userLoggedIn, userLoggedOut } =
  registerSlice.actions;
