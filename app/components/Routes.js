import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import HomePage from './HomePage'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampusView from './SingleCampusView'
import SingleStudentView from './SingleStudentView'
import AddCampus from './AddCampus'
import AddStudent from './AddStudent'
import EditCampus from './EditCampus'
import EditStudent from './EditStudent'
import page404 from './page404'

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
            <Route exact path='/' component={HomePage} />
            <Route exact path='/campuses' component={AllCampuses} />
            <Route exact path='/students' component={AllStudents} />
            <Route exact path='/campuses/:id' component={SingleCampusView} />
            <Route exact path='/students/:id' component={SingleStudentView} />
            <Route exact path='/addcampus' component={AddCampus} />
            <Route exact path='/addstudent' component={AddStudent} />
            <Route exact path='/campuses/edit/:id' component={EditCampus} />
            <Route exact path='/students/edit/:id' component={EditStudent} />
            <Route component={page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes