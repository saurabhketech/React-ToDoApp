import { createAction } from 'redux-actions';
import * as constant from "../constant"
export const RegisterSuccess = createAction(constant.REGISTER_SUCCESS);
export const RegisterRequest = createAction(constant.REGISTER_REQUEST);
export const RegisterError = createAction(constant.REGISTER_ERROR);


// Login

export const LoginSuccess = createAction(constant.LOGIN_SUCCESS);
export const LoginRequest = createAction(constant.LOGIN_REQUEST);
export const LoginError = createAction(constant.LOGIN_ERROR);

// get pols
export const GetPolsSuccess = createAction(constant.GET_POLS_SUCCESS);
export const GetPolsError = createAction(constant.GET_POLS_ERROR);
export const GetPolsRequest = createAction(constant.GET_POLS_REQUEST);

// update pol
export const UpdatePolsSuccess = createAction(constant.UPDATE_POLS_TITLE_SUCCESS);
export const UpdatePolsError = createAction(constant.UPDATE_POLS_TITLE_ERROR);
export const UpdatePolsRequest = createAction(constant.UPDATE_POLS_TITLE_REQUEST);

//add poll
export const AddPolsSuccess = createAction(constant.ADD_POLS_SUCCESS);
export const AddPolsError = createAction(constant.ADD_POLS_ERROR);
export const AddPolsRequest = createAction(constant.ADD_POLS_REQUEST);

// delete poll
export const DeletePolsSuccess = createAction(constant.DELETE_POLS_SUCCESS);
export const DeletePolsError = createAction(constant.DELETE_POLS_ERROR);
export const DeletePolsRequest = createAction(constant.DELETE_POLS_REQUEST);

//get users
export const GetUsersSuccess = createAction(constant.GET_USER_LIST_SUCCESS);
export const GetUsersError = createAction(constant.GET_USER_LIST_ERROR);
export const GetUsersRequest = createAction(constant.GET_USER_LIST_REQUEST);

//add options
export const AddOptionSuccess = createAction(constant.ADD_OPTION_SUCCESS);
export const AddOptionError = createAction(constant.ADD_OPTION_ERROR);
export const AddOptionRequest = createAction(constant.ADD_OPTION_REQUEST);

//delete options
export const DeleteOptionSuccess = createAction(constant.DELETE_OPTION_SUCCESS);
export const DeleteOptionError = createAction(constant.DELETE_OPTION_ERROR);
export const DeleteOptionRequest = createAction(constant.DELETE_OPTION_REQUEST);

//do vote
export const DoVoteSuccess = createAction(constant.DO_VOTE_SUCCESS);
export const DoVoteError = createAction(constant.DO_VOTE_ERROR);
export const DoVoteRequest = createAction(constant.DO_VOTE_REQUEST);