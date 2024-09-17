import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messageReducer from "./messageSlice.js";
import socketReducer from "./socketSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    spcket: socketReducer,
  },
});

export default store;
