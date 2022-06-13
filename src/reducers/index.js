import { combineReducers } from "redux";
import articalReducer from "../actions/articalReducer";
import userReducer from './userReducer'

const rootReducer = combineReducers({
    userState: userReducer,
    articalState: articalReducer,
})

export default rootReducer;