import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from './authorReducer'

const rootReducer = combineReducers({
    courseList: courses,
    authorList: authors
});

export default rootReducer;