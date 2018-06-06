import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
    courseList: courses
});

export default rootReducer;