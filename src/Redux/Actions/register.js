import { RegisterError, RegisterRequest, RegisterSuccess } from "./actions";
import api from "../../service/apicall";
import config from "../../config.json"
export function registerRequest(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(RegisterRequest())
            let data = await api.apiCall(`${config.baseApi}/add_user?username=${formData.username}&password=${formData.password}&role=${formData.role}`, "get", {}, {});
            if (data.error) {
                dispatch(RegisterError({ error: data.message }))
            } else {
                dispatch(RegisterSuccess({ response: data }))
            }
        } catch (e) {
            dispatch(RegisterError({ error: e }))
        }
    };
}