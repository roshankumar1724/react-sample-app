import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ErrorPage from "./components/error/ErrorPage";
import App from './components/App';

import Header from './common/Header';
import CoursesPage from './components/courses/CoursesPage';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="header clearfix">
                        <Header />
                    </div>
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route path="/home" component={HomePage}></Route>
                        <Route path="/about" component={AboutPage}></Route>
                        <Route path="/courses" component={CoursesPage}></Route>
                        <Route component={ErrorPage}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;