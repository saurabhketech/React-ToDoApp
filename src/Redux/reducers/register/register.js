import * as constant from "../../constant"


const initialState = {
  isLogin: false,
  isError: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case constant.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case constant.REGISTER_REQUEST:
      return { ...state, isLoading: true };

    case constant.REGISTER_ERROR:
      return { ...state, isError: true };

    default:
      return state;
  }
}