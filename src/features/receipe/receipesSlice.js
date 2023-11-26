import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "chicken Curry",
    ingredient: "Chicken",
    description: "butter",
  },
  {
    id: "2",
    title: "Momo",
    ingredient: "Meat",
    description: "steam",
  },
];

const receipesSlice = createSlice({
  name: "receipes",
  initialState,
  reducers: {
    recepieAdd(state, action) {
      state.push(action.payload);
    },
  },
});

export const { recepieAdd } = receipesSlice.actions;

export default receipesSlice.reducer;
