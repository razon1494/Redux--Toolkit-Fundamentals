const postReducer = require("../features/post/postSlice");
const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");

const logger = createLogger();
const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
module.exports = store;
