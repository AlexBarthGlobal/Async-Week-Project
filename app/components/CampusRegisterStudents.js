import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchStudents} from '../redux/students'
import SingleStudent from './SingleStudent'
import {registerStudentThunk} from '../redux/students'

export class CampusRegisterStudents extends React.Component {

    componentDidMount() {
        this.props.loadStudents();
    }

    render() { 
        if (this.props.students) {
          if (this.props.students.filter(student => student.campusId != this.props.match.params.id).length < 1) {
            return (
              <div className='centerThis marginTop'>
                <div>Add Students to Campus</div>
                <div className='marginTop'>No more students to display!</div>
              </div>
            )
          } 
          if (this.props.students.length > 0) {
            return ( 
              <div>
                <div className='centerThis marginTop'>
                  <div>Register Students To Campus</div>
                  <Link to={`/campuses/${this.props.match.params.id}`}><button>Done</button></Link>
                </div>
                <div className='allItems'>{this.props.students.sort(function(a,b) {
                  var nameA=a.gpa, nameB=b.gpa
                    if (nameA > nameB)
                      return -1;
                    if (nameA < nameB)
                      return 1;
                    return 0;
            }).map(student => {
                    if (student.campusId != this.props.match.params.id) {
                  return <div key={student.id} className='singleItemOnSingleCampus'>
                    <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl}/>
                    <div className='centerThis marginSmallTop'>GPA: {student.gpa}</div>
                    <div className='centerThis'>
                      <button className='register' onClick={() => this.props.registerStudent({student: student.id, campus: {data: this.props.match.params.id}})}>Register</button>
                    </div>
                  </div> 
                  }})}       
                </div>
              </div>
            ) 
          }
        } else {
            return (
            <div>
              <div>Add Students to Campus</div>
              <div>Loading</div>
            </div>   
          )
        }
    };
}

const mapState = (state) => {
    return {
        students: state.students.data
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadStudents: () => dispatch(fetchStudents()),
        registerStudent: (ids) => dispatch(registerStudentThunk(ids))
    }
}

export default connect(mapState, mapDispatch)(CampusRegisterStudents)