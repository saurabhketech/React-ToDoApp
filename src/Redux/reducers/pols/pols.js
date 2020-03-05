import * as constant from "../../constant"


const initialState = {
  isFetched: false,
  isError: false,
  isLoading: false
};

export default function appReducer(state = initialState, action) {  
  switch (action.type) {
    case constant.GET_POLS_SUCCESS:
      return { ...state, isLoading: false, isFetched: true, response: action.payload.data.data };
    case constant.GET_POLS_REQUEST:
      return { ...state, isLoading: true };
    case constant.GET_POLS_ERROR:
      return { ...state, isError: true, isLoading:false, error: action.payload.error };

    default:
      return state;
  }
}