const store = require("./app/store");
const { fetchPosts } = require("./features/post/postSlice");

store.subscribe(() => {});

store.dispatch(fetchPosts());
