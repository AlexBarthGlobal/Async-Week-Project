import React from "react";
import { connect } from "react-redux";
import {fetchStudents} from '../redux/students'
import SingleStudent from './SingleStudent'

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
    return this.props.students ? 
      ( <div>
        <div>All Students</div>
        <div id='allStudents'>{this.props.students.map(student =>
          <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl}/>  
          )}       
        </div>
        </div>
      ) 
    :   
      ( <div>
        <div>All Students</div>
        <div>Loading</div>
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
    loadStudents: () => dispatch(fetchStudents())
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
