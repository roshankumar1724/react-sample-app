import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class AboutPage extends Component {
    goToPrevious = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="well">
                <h1> This is ABOUT page</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover many web sites still in
                    their infancy. Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).
                </p>
                <button className="btn btn-primary" onClick={this.goToPrevious}> Previous </button>
            </div>
        );
    }
}

export default AboutPage;