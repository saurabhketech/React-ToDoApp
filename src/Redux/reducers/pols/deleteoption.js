import * as constant from "../../constant"


const initialState = {
  isError: false,
  isLoading: false
};

export default function appReducer(state = initialState, action) {  
  switch (action.type) {
    case constant.DELETE_OPTION_SUCCESS:
      return { ...state, isLoading: false, isFetched: true, response: action.payload.data.data };
    case constant.DELETE_OPTION_REQUEST:
      return { ...state, isLoading: true };
    case constant.DELETE_OPTION_ERROR:
      return { ...state, isError: true, isLoading:false, error: action.payload.error };

    default:
      return state;
  }
}