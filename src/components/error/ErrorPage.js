import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ErrorPage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>404 : Page Not Found</h1>
                <p>
                    <Link className="btn btn-success btn-lg" to="/"> HOME </Link>
                </p>
            </div>
        );
    }
}

export default ErrorPage;