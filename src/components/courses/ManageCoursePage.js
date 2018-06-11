import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
                course: Object.assign({}, nextProps.course)
            });
        }
    }
    // Handling form Changes ...
    updateCourseState(event) {
        const field = event.target.name;
        // let tempCourse = this.state.course; // To avoid mutation
        let tempCourse = Object.assign({}, this.state.course);
        tempCourse[field] = event.target.value;
        return this.setState({
            course: tempCourse
        });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);

        // One can Redirect using contect too
        // Need to reserch more for it's use in react-router-dom 
        this.props.history.push('/courses');
    }

    render() {
        return (
            <div className="jumbotron">
                <CourseForm
                    course={this.state.course}
                    allAuthors={this.props.authors}
                    onSave={this.saveCourse}
                    onChange={this.updateCourseState}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

function getCourseById(courses, id) {
    console.log("Courses : ", courses);
    const course = courses.filter(course => course.id === id);
    if (course.length) {
        return course[0]; // since filter returns an array, need to grab the first one.
    }
    return null;
}

/**
 * 
 * @param state 
 * @param ownProps : props sent by react-router-dom as params in url.
 */
function mapStateToProps(state, ownProps) {
    // console.log("OwnProps : ", JSON.stringify(ownProps.match.params, null, 2));
    const courseId = ownProps.match.params.id; // here id is from '/course/:id'
    console.log("courseId: " + courseId);

    let initialCourse = {
        id: "",
        title: "",
        watchHref: "",
        authorId: "",
        length: "",
        category: ""
    }

    if (courseId && state.courseList.length > 0) {
        console.log("Course in State : ", JSON.stringify(state.courseList, null, 2));
        initialCourse = getCourseById(state.courseList, courseId);
    }

    const authorFormattedForDropdown = state.authorList.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    console.log("Author List : " + JSON.stringify(authorFormattedForDropdown, null, 2));

    return {
        course: initialCourse,
        authors: authorFormattedForDropdown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

// ManageCoursePage.contextTypes = {
//     router: PropTypes.object
// }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);