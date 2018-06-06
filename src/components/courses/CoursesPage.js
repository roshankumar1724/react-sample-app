import React, { Component } from 'react';

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
        alert(`Saving : ${this.state.course.title}`)
    }

    render() {
        return (
            <div className="jumbotron">
                <h1> COURSES PAGE </h1>
                <h2> Add Course </h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave} />
            </div>
        );
    }
}

export default CoursesPage;