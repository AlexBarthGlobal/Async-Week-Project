import React from "react";
import { connect } from "react-redux";
import {fetchStudents} from '../redux/students'
import SingleStudent from './SingleStudent'
import { Link } from 'react-router-dom'
import { deleteStudentThunk } from '../redux/students'

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    if (this.props.students) {
    console.log('AllStudents In Props')
    console.log(this.props.students)
    }


    if (this.props.students) { 
      if (this.props.students.length > 0) {

      return ( 
        <div>
        <div className='centerThis marginTop'>
        <div>All Students</div>
        <Link to={`/addstudent`}><button>Add Student</button></Link>
        </div>
        <div className='allItems'>{this.props.students.map(student =>
        <div key={student.id} className='singleItem'>
          <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl}/>
          <div className='centerThis'>
          <button className='delete' onClick={() => this.props.deleteStudent(student.id)}>Delete</button>
          </div>
        </div> 
          )}       
        </div>
        </div>
      ) 
        }} else {  

      this.props.loadStudents()

      return ( <div>
                <div>All Students</div>
                <div>Loading</div>
              </div>   
      )
    }
    return ( 
      <div className='centerThis marginTop'>
      <div>All Students</div>
      <Link to={`/addstudent`}><button>Add Student</button></Link>
      <div className='marginTop'>No students to display! Click Add Student</div>
      </div>
      )
  };
}

const mapState = (state) => {
  return {
    students: state.students.data
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadStudents: () => dispatch(fetchStudents()),
    deleteStudent: (student) => dispatch(deleteStudentThunk(student))
  };
};

export default connect(mapState, mapDispatch)(AllStudents);



//Original render
// render() {
//   if (this.props.students) {
//   console.log('AllStudents In Props')
//   console.log(this.props.students)
//   }
//   return this.props.students ? 
//     ( <div>
//       <div>All Students</div>
//       <Link to={`/addstudent`}>Add Student</Link>
//       <div id='allStudents'>{this.props.students.map(student =>
//         <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl}/>  
//         )}       
//       </div>
//       </div>
//     ) 
//   :   
//     ( <div>
//       <div>All Students</div>
//       <div>Loading</div>
//       </div>   
//     )
// };
// }
