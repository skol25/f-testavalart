// src/services/commonService.ts
import { Dispatch } from "redux";
import AxiosInstance from "../../utils/axios/axiosInstance";
import { updateCommonData } from "../../utils/redux/commonReducer";
import { dataRes } from "../../constants/constants";

export const getCommonAndDispatch = async (dispatch: Dispatch) => {
  try {
    const responseGetCommon = await AxiosInstance.get("/common");
    const categories = responseGetCommon.data;

    dispatch(updateCommonData(categories));
  } catch (error) {
    //if the fecth response fails use dataRes
    dispatch(updateCommonData(dataRes.common));
    console.error("Error fetching and storing categories:", error);
    throw error;
  }
};
