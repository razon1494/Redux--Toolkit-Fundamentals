const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");

// Subscribe
store.subscribe(() => {
  //   console.log(store.getState());
});
store.dispatch(counterActions.increment());
