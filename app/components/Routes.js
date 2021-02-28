import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from './HomePage'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampusView from './SingleCampusView'
import SingleStudentView from './SingleStudentView'
import AddCampus from './AddCampus'
import AddStudent from './AddStudent'
import EditCampus from './EditCampus'
import EditStudent from './EditStudent'
import Page404 from './Page404'
import CampusRegisterStudents from './CampusRegisterStudents'
import IsLogged from './IsLogged'
import logIn from './logIn'
import logOut from './logOut'
import Donate from './Donate'
import SignUp from './signUp'

const RequireAuth = ({ children }) => {
  return <IsLogged props={ {children} }/>
}

export const Routes = (props) => {
  console.log('props from routes')
  console.log(props)

  var log = '/login'
  var logStatus = 'Log In'

  if (props.props.user) {
    if (props.props.user.id) {
      log = '/logout'
      logStatus = 'Log Out'
    }
  }
  
  return (
    <Router>
      <div className='Routes'>
        <nav className='nav'>
          <NavLink to='/' className='navLink'>Home</NavLink>
          <NavLink to='/campuses' className='navLink'>Campuses</NavLink>
          <NavLink to='/students' className='navLink'>Students</NavLink>
          <NavLink to={log} className='navLink'>{logStatus}</NavLink>
          {/* <NavLink to='/login' className='navLink'>Log In</NavLink> */}
          {/* <NavLink to='/logout' className='navLink'>Log Out</NavLink> */}
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/students' component={AllStudents} />
            <Route exact path='/campuses' component={AllCampuses} />         

            <Route exact path='/login' component={logIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/logout' component={logOut} />

            <RequireAuth>
              <Route exact path='/campuses/registerstudents/:id' component={CampusRegisterStudents} />
              <Route exact path='/campuses/:id' component={SingleCampusView} />
              <Route exact path='/students/:id' component={SingleStudentView} />
              <Route exact path='/addcampus' component={AddCampus} />
              <Route exact path='/addstudent' component={AddStudent} />
              <Route exact path='/campuses/edit/:id' component={EditCampus} />
              <Route exact path='/students/edit/:id' component={EditStudent} />
            </RequireAuth>

            <Route component={Page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

// export default Routes