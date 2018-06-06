import React, { Component } from 'react';
import { connect } from "react-redux";

import * as courseActions from '../../actions/courseActions';
import { PropTypes } from "prop-types";
import { bindActionCreators } from 'redux';

class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ""
            }
        };
    }

    onTitleChange = (event) => {
        const tempCourse = this.state.course;
        tempCourse.title = event.target.value;
        this.setState({
            course: tempCourse
        });
    }

    onClickSave = () => {
        // alert(`Saving : ${this.state.course.title}`);

        // If mapDispatchToProps is not defined then we need to use it in this way.
        // this.props.dispatch(courseActions.createCourse(this.state.course));

        // this.props.createCourseList(this.state.course);

        this.props.actions.createCourse(this.state.course);
    }

    courseRow = (course, index) => {
        return (
            <li key={index}>
                {course.title}
            </li>
        );
    }

    render() {
        return (
            <div className="jumbotron">
                <h1> COURSES PAGE </h1>
                {this.props.courses.map(this.courseRow)}
                <h2> Add Course </h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave} />
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
