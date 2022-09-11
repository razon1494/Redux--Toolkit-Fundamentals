// Import create slice
const { createSlice } = require("@reduxjs/toolkit");
// Define Initial State
const initialState = {
  count: 0,
};
// create counter slice
const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      //   state.count = state.count + 1;
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      //   state.count = state.count + 1;
      state.count = state.count - action.payload;
    },
  },
  extraReducers: {
    ["counter/increment"]: (state, action) => {
      state.count++;
    },
  },
});
module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
