import * as constant from "../../constant"
import jwt from "jsonwebtoken";

const initialState = {
    isLogin: localStorage.getItem('token') ? true : false,
    user: localStorage.getItem('token') ? jwt.verify(localStorage.getItem('token'), 'jwt_tok') : null
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case constant.LOGIN_SUCCESS:
            return {...state, isLoading: false, isLogin: true, response: action.payload.response, user: localStorage.getItem('token') ? jwt.verify(localStorage.getItem('token'), 'jwt_tok') : null };
        case constant.LOGIN_REQUEST:
            return {...state, isLoading: true };

        case constant.LOGIN_ERROR:
            return {...state, isError: true, isLoading: false, error: action.payload.error };

        default:
            return state;
    }
}