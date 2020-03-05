import { combineReducers } from "redux";
import register from "./register/register"
import login from "./login/login";
import pols from "./pols/pols";
import polsUpdate from  "./pols/updatepol";
import addPoll from "./pols/addpoll";
import deletePoll from "./pols/deletepoll";
import usersList from "./users/users";
import addOption from "./pols/addoption";
import deleteOption from "./pols/deleteoption";
import doVote from "./pols/dovote";

const rootReducer = combineReducers({
    register: register,
    login: login,
    pols: pols,
    polsUpdate: polsUpdate,
    addPoll: addPoll,
    deletePoll: deletePoll,
    usersList: usersList,
    addOption: addOption,
    deleteOption: deleteOption,
    doVote: doVote
});

export default rootReducer;