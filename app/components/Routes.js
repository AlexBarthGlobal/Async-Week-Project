import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import HomePage from './HomePage'
import AllStudents from './AllStudents'
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'

const Routes = () => {
  return (
    <Router>
      <div className='Routes'>
        <nav className='nav'>
          <NavLink to='/' className='navLink'>Home</NavLink>
          <NavLink to='/campuses' className='navLink'>Campuses</NavLink>
          <NavLink to='/students' className='navLink'>Students</NavLink>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/campuses' component={AllCampuses}></Route>
            <Route exact path='/students' component={AllStudents}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
