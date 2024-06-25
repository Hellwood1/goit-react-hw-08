import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    phone: "",
  },
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
    changePhoneFilter(state, action) {
      state.phone = action.payload;
    },
  },
});

export const { changeNameFilter, changePhoneFilter } = slice.actions;

export default slice.reducer;