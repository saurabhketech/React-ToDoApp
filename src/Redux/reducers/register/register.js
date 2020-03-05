import * as constant from "../../constant"


const initialState = {
  isRegistered: false,
  isError: false,
  isLoading: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case constant.REGISTER_SUCCESS:
      return { ...state, isLoading: false, isRegistered: true, response: action.payload.response };
    case constant.REGISTER_REQUEST:
      return { ...state, isLoading: true };

    case constant.REGISTER_ERROR:
      return { ...state, isError: true, isLoading:false, error: action.payload.error };

    default:
      return state;
  }
}