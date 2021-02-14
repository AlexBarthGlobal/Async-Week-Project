import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import {fetchCampusAndItsStudents} from '../redux/singleCampus'
import SingleStudent from './SingleStudent'
import {unregisterStudentThunk} from '../redux/singleCampus'

export class SingleCampusView extends React.Component {
  constructor() {
    super()

  this.unregisterStudent = this.unregisterStudent.bind(this)
  }
   
  componentDidMount() {
    // if (!this.props.students) {
    const {id} = this.props.match.params;
    this.props.loadCampusAndItsStudents(id);
    // };
  };

  async unregisterStudent(id) {
    this.props.unregisterThisStudent(id)
    this.forceUpdate()
  }

  render () {
    if (this.props.currCampusInfo && this.props.currStudents) {
      if (this.props.currStudents.length) {
        var renderStudentsFromCampus =
        <div className='allItems'>
          {this.props.currStudents.map(student => 
            <div key={student.id} className='singleItemOnSingleCampus'>
              <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl} />
              <div className='centerThis marginSmallTop'>GPA: {student.gpa}</div>
              <div className='centerThis'>
                <button onClick={() => this.unregisterStudent(student.id)}>Unregister</button>
              </div>
            </div>
          )}
        </div>
      } else {
        var renderStudentsFromCampus = <div className='allItems marginBottom marginTop'>No students enrolled here yet!</div>
      }
    } 
    else if (this.props.campusAndItsStudents) {
      if (this.props.itsStudents.length) {
        var renderStudentsFromCampus =
        <div className='allItems'>
          {this.props.itsStudents.map(student => 
            <div key={student.id} className='singleItemOnSingleCampus'>
              <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl} />
              <div className='centerThis marginSmallTop'>GPA: {student.gpa}</div>
              <div className='centerThis'>
                <button onClick={() => this.props.unregisterThisStudent(student.id)}>Unregister</button>
              </div>
            </div>
          )}
        </div>
      } else {
        var renderStudentsFromCampus = <div className='allItems marginBottom marginTop'>No students enrolled here yet!</div>
      };
    };

    return this.props.currStudents && this.props.currCampusInfo ? (
      <div className='flex'>
        <div className='centerThis'>
          <div className='marginTop'>{this.props.currCampusInfo[0].campusName}</div>
          <img src={this.props.currCampusInfo[0].imageUrl} alt="image" className='largeImage'></img>
          <div>{this.props.currCampusInfo[0].address}</div>
          <div className='marginTop bodySize'>{this.props.currCampusInfo[0].description}</div>
          <Link to={{pathname: `/campuses/edit/${this.props.currCampusInfo[0].id}`, state:{prevUrl: location.pathname}}}><button>Edit Campus</button></Link>
        </div>
        {renderStudentsFromCampus}
      </div>  
      )
      : this.props.campusAndItsStudents ? (
        <div className='flex'>
        <div className='centerThis'>
          <div className='marginTop'>{this.props.campusAndItsStudents[0].campusName}</div>
          <img src={this.props.campusAndItsStudents[0].imageUrl} alt="image" className='largeImage'></img>
          <div>{this.props.campusAndItsStudents[0].address}</div>
          <div className='marginTop bodySize'>{this.props.campusAndItsStudents[0].description}</div>
          <Link to={{pathname: `/campuses/edit/${this.props.campusAndItsStudents[0].id}`, state:{prevUrl: location.pathname}}}><button>Edit Campus</button></Link>
        </div>
        {renderStudentsFromCampus}
      </div>  
      )
      :
      ( 
      <div>
        <div>Single Campus View</div>
        <div>Loading</div>
      </div>
    )
  };
};

const mapState = (state, {match}) => {
  const itsStudents = state.campusAndItsStudents.data ? state.campusAndItsStudents.data[0].students : null;
  const currCampusInfo = state.campuses.data ? state.campuses.data.filter(campus => campus.id == match.params.id*1) : null;
  const currStudents = state.students.data ? state.students.data.filter(student => student.campusId == match.params.id*1) : null;
  return {
    campusAndItsStudents: state.campusAndItsStudents.data,
    itsStudents,
    currCampusInfo,
    currStudents
  };
}; 

const mapDispatch = (dispatch) => {
  return {
    loadCampusAndItsStudents: (id) => dispatch(fetchCampusAndItsStudents(id)),
    unregisterThisStudent: (id) => dispatch(unregisterStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(SingleCampusView)