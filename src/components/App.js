// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// import Header from '../common/Header';
// import HomePage from './home/HomePage';

// import { Redirect } from "react-router-dom";

// class App extends Component {
//   render() {
//     console.log(this.props.children);
//     return (
//       // <div className="header clearfix">
//       //   <Header />
//       // </div>

//       <div>
//         {/* {this.props.children} */}
//       </div>

//       // <Redirect to="/home" component={HomePage}></Redirect>
//     );
//   }
// }

// // App.propTypes = {
// //   children: PropTypes.object.isRequired
// // };

// export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './home/HomePage';
import CoursesPage from './courses/CoursesPage';
import AboutPage from './about/AboutPage';
import ErrorPage from "./error/ErrorPage";
import Header from '../common/Header';

class App extends Component {
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

export default App;
