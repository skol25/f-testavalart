import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AppData from "../../types/commonTypes/types";

// Define the structure of the state
interface CommonState {
  commonData: AppData["common"];
}

// Initial state for the common reducer
const initialState: CommonState = {
  commonData: {
    Benefits: [],
    FEATURES: [],
  },
};

// Create a slice of the Redux store for the common reducer
const commonReducer = createSlice({
  name: "Common",
  initialState,
  reducers: {
    // Action to update the common data in the state
    updateCommonData: (state, action: PayloadAction<AppData["common"]>) => {
      state.commonData = action.payload;
    },
  },
});

// Export individual action creators and the reducer
export const { updateCommonData } = commonReducer.actions;
export default commonReducer.reducer;
