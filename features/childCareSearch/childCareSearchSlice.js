const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filterData: null,
  city: "",
  step: 0,
};

const childCarerSearchSlice = createSlice({
  name: "childCarerSearch",
  initialState,
  reducers: {
    setChildCarerFilterData: (state, action) => {
      state.filterData = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export default childCarerSearchSlice.reducer;

export const { setChildCarerFilterData, setCity, setStep } =
  childCarerSearchSlice.actions;
