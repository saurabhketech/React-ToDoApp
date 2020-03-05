import * as constant from "../../constant"


const initialState = {
  isUpdate: false,
  isError: false,
  isLoading: false
};

export default function appReducer(state = initialState, action) {  
  switch (action.type) {
    case constant.UPDATE_POLS_TITLE_SUCCESS:
      return { ...state, isLoading: false, isUpdate: true, response: action.payload.data.data };
    case constant.UPDATE_POLS_TITLE_REQUEST:
      return { ...state, isLoading: true };
    case constant.UPDATE_POLS_TITLE_ERROR:
      return { ...state, isError: true, isLoading:false, isUpdate: false, error: action.payload.error };

    default:
      return state;
  }
}