// Import create slice
const { createSlice } = require("@reduxjs/toolkit");
// Define Initial State
const initialState = {
  count: 0,
};
// create counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      //   state.count = state.count + 1;
      state.count++;
    },
    decrement: (state, action) => {
      //   state.count = state.count + 1;
      state.count--;
    },
  },
});
module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
