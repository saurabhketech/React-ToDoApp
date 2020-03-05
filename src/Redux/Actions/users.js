import { GetUsersError, GetUsersRequest, GetUsersSuccess } from "./actions";
import api from "../../service/apicall";
import config from "../../config.json"
export function getUserListRequest(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(GetUsersRequest({ loader: true }))
            let data = await api.apiCall(`${config.baseApi}/list_users`, "get", {}, {})            
            dispatch(GetUsersSuccess({ response: data.data }))

        } catch (error) {
            dispatch(GetUsersError({ error: error }))
        }
    };
}