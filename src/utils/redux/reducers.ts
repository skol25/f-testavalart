// src/utils/redux/reducers.ts
import { combineReducers } from "@reduxjs/toolkit";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
  common: commonReducer,
});

export default rootReducer;
