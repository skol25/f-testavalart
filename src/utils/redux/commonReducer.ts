// src/utils/redux/newFeatureSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AppData from "../../types/commonTypes/types";

interface CommonState {
  commonData: AppData["common"];
}

const initialState: CommonState = {
  commonData: {
    Benefits: [],
    FEATURES: [],
  },
};

const commonReducer = createSlice({
  name: "Common",
  initialState,
  reducers: {
    updateCommonData: (state, action: PayloadAction<AppData["common"]>) => {
      state.commonData = action.payload;
    },
  },
});

export const { updateCommonData } = commonReducer.actions;
export default commonReducer.reducer;
