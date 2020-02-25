import { combineReducers } from "redux";
import register from "./register/register"
import login from "./login/login"
const rootReducer = combineReducers({
    register: register,
    login: login
});

export default rootReducer;