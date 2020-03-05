import * as constant from "../../constant"


const initialState = {
  isError: false,
  isLoading: false
};

export default function appReducer(state = initialState, action) {  
  switch (action.type) {
    case constant.DO_VOTE_SUCCESS:
      return { ...state, isLoading: false, isFetched: true, response: action.payload.data.data };
    case constant.DO_VOTE_REQUEST:
      return { ...state, isLoading: true };
    case constant.DO_VOTE_ERROR:
      return { ...state, isError: true, isLoading:false, error: action.payload.error };

    default:
      return state;
  }
}