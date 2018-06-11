import * as types from "./actionTypes";
import courseApi from '../api/mockCourseApi';

// export function createCourse(course) {
//     return {
//         type: types.CREATE_COURSE,
//         course
//     }
// }

export function loadCoursesSucess(courses) {
    return {
        type: types.LOAD_COURSE_SUCCESS,
        courses
    }
}

export function createCourseSuccess(course) {
    return {
        type: types.CREATE_COURSE_SUCCESS,
        course
    }
}

export function updateCourseSucess(course) {
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course
    }
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSucess(courses));
        }).catch((error) => {
            throw (error);
        })
    }
}

export function saveCourse(course) {
    //  here getState is useful when we need to access the store inside the thunk.
    // return function (dispatch, getState) {
    return function (dispatch, getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSucess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw (error);
        });
    }
}