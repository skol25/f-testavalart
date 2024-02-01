// src/services/commonService.ts
import { Dispatch } from "redux";
import AxiosInstance from "../../utils/axios/axiosInstance";
import { updateCommonData } from "../../utils/redux/commonReducer";

export const getCommonAndDispatch = async (dispatch: Dispatch) => {
  try {
    const responseGetCommon = await AxiosInstance.get("/common");
    const categories = responseGetCommon.data;
    dispatch(updateCommonData(categories));
  } catch (error) {
    console.error("Error fetching and storing categories:", error);
    throw error;
  }
};
