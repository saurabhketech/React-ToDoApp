import * as constant from "../../constant"


const initialState = {
  isLogin: false,
  isError: false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case constant.LOGIN_SUCCESS:
      return { ...state, isLoading: false };
    case constant.LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case constant.LOGIN_ERROR:
      return { ...state, isError: true };

    default:
      return state;
  }
}