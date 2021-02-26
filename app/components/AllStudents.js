import React from "react";
import { connect } from "react-redux";
import {fetchStudents} from '../redux/students'
import SingleStudent from './SingleStudent'
import { Link } from 'react-router-dom'
import { deleteStudentThunk } from '../redux/students'
import {fetchCampuses} from '../redux/campuses'
import Anime, {anime} from 'react-anime';

export class AllStudents extends React.Component {

  componentDidMount() {
    if (!this.props.students) {
      this.props.loadStudents()
    };
    if (!this.props.campuses) {
      this.props.loadCampuses()
    };
  };

  render() {
    if (this.props.user.id) {
      var AddStudent= <Link to={`/addstudent`}><button>Add Student</button></Link>
    }

    var noStudentsMessage = !this.props.user.id ? <div className='marginTop'>No students to display! Come back later!</div> : <div className='marginTop'>No students to display! Click Add Student</div>



    if (this.props.students) { 
      if (this.props.students.length > 0) {
        if (!this.props.user.id) {
          var allStudents = this.props.students.sort(function(a,b) {
            var nameA=a.lastName.toLowerCase(), nameB=b.lastName.toLowerCase()
              if (nameA < nameB)
                return -1;
              if (nameA > nameB)
                return 1;
              return 0;
          }).map(student =>
            <Anime delay={anime.stagger(100)} scale={[.1, 0.91]} key={student.id}><div key={student.id} className='singleItemNotLogged'>
              <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl}/>
            </div></Anime>
            )
        } else if (this.props.user.id) {
          var allStudents = this.props.students.sort(function(a,b) {
            var nameA=a.lastName.toLowerCase(), nameB=b.lastName.toLowerCase()
              if (nameA < nameB)
                return -1;
              if (nameA > nameB)
                return 1;
              return 0;
          }).map(student =>
            <Anime delay={anime.stagger(100)} scale={[.1, 0.91]} key={student.id}><div key={student.id} className='singleItem'>
              <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl}/>
              <div className='centerThis'>
                <button className='delete' onClick={() => this.props.deleteStudent(student.id)}>Delete</button>
              </div>
            </div></Anime>
            )
        }

        return ( 
          <div>
            <div className='centerThis marginTop'>
              <div>All Students</div>
              {/* <Link to={`/addstudent`}><button>Add Student</button></Link> */}
              {AddStudent}
            </div>
            <div className='allItems'>
              {allStudents}
            </div>
          </div>
        ) 
      }
    } else {
        return (
        <div>
          <div>All Students</div>
          <div>Loading</div>
        </div>   
      )
    }
    return ( 
      <div className='centerThis marginTop'>
        <div>All Students</div>
          {/* <Link to={`/addstudent`}><button>Add Student</button></Link> */}
          {AddStudent}
          {noStudentsMessage}
      </div>
    )
  };
};

const mapState = (state) => {
  return {
    students: state.students.data,
    campuses: state.campuses.data,
    user: state.userReducer.user
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadStudents: () => dispatch(fetchStudents()),
    deleteStudent: (student) => dispatch(deleteStudentThunk(student)),
    loadCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(mapState, mapDispatch)(AllStudents);