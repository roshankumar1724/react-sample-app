import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList'

class CoursesPage extends Component {
    constructor(props) {
        super(props);
    }

    courseRow = (course, index) => {
        return (
            <li key={index}>
                {course.title}
            </li>
        );
    }

    redirectToAddCoursePage = () => {
        this.props.history.push('/course');
    }

    render() {
        const { courses } = this.props;
        return (
            <div className="jumbotron">
                <h1> COURSES PAGE </h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={courses} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courseList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourseList: (course) => {
        //     return dispatch(courseActions.createCourse(course));
        // }

        actions: bindActionCreators(courseActions, dispatch)
    }
}

CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,

    courses: PropTypes.array.isRequired,
    // createCourseList: PropTypes.func.isRequired

    actions: PropTypes.object.isRequired
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

// export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
