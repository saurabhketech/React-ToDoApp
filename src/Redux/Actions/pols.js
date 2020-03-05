import {
    GetPolsRequest,
    GetPolsError,
    GetPolsSuccess,
    UpdatePolsError,
    UpdatePolsRequest,
    UpdatePolsSuccess,
    AddPolsError,
    AddPolsRequest,
    AddPolsSuccess,
    DeletePolsError,
    DeletePolsRequest,
    DeletePolsSuccess,
    AddOptionRequest,
    AddOptionError,
    AddOptionSuccess,
    DeleteOptionError,
    DeleteOptionRequest,
    DeleteOptionSuccess,
    DoVoteError,
    DoVoteRequest,
    DoVoteSuccess
} from "./actions";
import api from "../../service/apicall";
import config from "../../config.json"
export function PolsRequest(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(GetPolsRequest({ loader: true }))
            let data = await api.apiCall(`${config.baseApi}/list_polls`, "get", {}, {})
            if (!data.error) {
                dispatch(GetPolsSuccess({ login: true, data: data }))
            } else {
                dispatch(GetPolsError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(GetPolsError({ login: false, error: error }))
        }
    };
}


export function updatePolsRequest(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(UpdatePolsRequest())
            let data = await api.apiCall(`${config.baseApi}/update_poll_title?id=${formData._id}&title=${formData.title}`, "get", {}, {})
            if (!data.error) {
                dispatch(UpdatePolsSuccess({ login: true, data: data }))
            } else {
                dispatch(UpdatePolsError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(UpdatePolsError({ login: false, error: error }))
        }
    };
}

export function addPoll(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(AddPolsRequest())
            let data = await api.apiCall(`${config.baseApi}/add_poll?title=${formData.title}&options=${formData.options}`, "get", {}, {})
            if (!data.error) {
                dispatch(AddPolsSuccess({ login: true, data: data }))
            } else {
                dispatch(AddPolsError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(AddPolsError({ login: false, error: error }))
        }
    };
}

export function deletePoll(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(DeletePolsRequest())
            let data = await api.apiCall(`${config.baseApi}/delete_poll?id=${formData.id}`, "get", {}, {})
            if (!data.error) {
                dispatch(DeletePolsSuccess({ login: true, data: data }))
            } else {
                dispatch(DeletePolsError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(DeletePolsError({ login: false, error: error }))
        }
    };
}

export function addOption(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(AddOptionRequest())
            let data = await api.apiCall(`${config.baseApi}/add_new_option?id=${formData._id}&option_text=${formData.option}`, "get", {}, {})
            if (!data.error) {
                dispatch(AddOptionSuccess({ login: true, data: data }))
            } else {
                dispatch(AddOptionError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(AddOptionError({ login: false, error: error }))
        }
    };
}

export function deleteOption(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(DeleteOptionRequest())
            let data = await api.apiCall(`${config.baseApi}/delete_poll_option?id=${formData.id}&option_text=${formData.option}`, "get", {}, {})
            if (!data.error) {
                dispatch(DeleteOptionSuccess({ login: true, data: data }))
            } else {
                dispatch(DeleteOptionError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(DeleteOptionError({ login: false, error: error }))
        }
    };
}

export function doVote(formData) {
    return async function(dispatch, getState) {
        try {
            dispatch(DoVoteRequest())
            let data = await api.apiCall(`${config.baseApi}/do_vote?id=${formData.id}&option_text=${formData.option}`, "get", {}, { access_token: localStorage.getItem('token') })
            if (!data.error) {
                dispatch(DoVoteSuccess({ login: true, data: data }))
            } else {
                dispatch(DoVoteError({ login: false, error: data.data }))
            }
        } catch (error) {
            dispatch(DoVoteError({ login: false, error: error }))
        }
    };
}