import { createAction } from 'redux-actions';
import * as constant from "../constant"
export const RegisterSuccess = createAction(constant.REGISTER_SUCCESS);
export const RegisterRequest = createAction(constant.REGISTER_REQUEST);
export const RegisterError = createAction(constant.REGISTER_ERROR);


// Login

export const LoginSuccess = createAction(constant.LOGIN_SUCCESS);
export const LoginRequest = createAction(constant.LOGIN_REQUEST);
export const LoginError = createAction(constant.REGISTER_ERROR);