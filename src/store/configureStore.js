import { configureStore } from "@reduxjs/toolkit";
import propertyReduce from "./propertySlice";

const store = configureStore({
  reducer: propertyReduce,
});

export default store;
