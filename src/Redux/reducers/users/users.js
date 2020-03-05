import * as constant from "../../constant"


const initialState = {
   
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case constant.GET_USER_LIST_SUCCESS:
            return {...state, isLoading: false, response: action.payload.response };
        case constant.GET_USER_LIST_REQUEST:
            return {...state, isLoading: true };

        case constant.GET_USER_LIST_ERROR:
            return {...state, isError: true, isLoading: false, error: action.payload.error };

        default:
            return state;
    }
}