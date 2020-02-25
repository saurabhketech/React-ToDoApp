import { RegisterError, RegisterRequest, RegisterSuccess } from "./actions";

export function registerRequest(formData) {
    return function(dispatch, getState) {
        dispatch(RegisterSuccess({}))
        // console.log("11111111111111/1", formData);
    };
}