import { LoginError, LoginRequest, LoginSuccess } from "./actions";
import api from "../../service/apicall";
import config from "../../config.json"
export function loginRequest(formData) {
    return async function (dispatch, getState) {
        try {
            dispatch(LoginRequest({ loader: true }))
            let data = await api.apiCall(`${config.baseApi}/login?username=${formData.username}&password=${formData.password}`, "get", {}, {})            
            if(data.token){
                localStorage.setItem("token", data.token)
                dispatch(LoginSuccess({ login: true, response: data }))
            }else{
                dispatch(LoginError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(LoginError({ login: false, error: error }))
        }
    };
}