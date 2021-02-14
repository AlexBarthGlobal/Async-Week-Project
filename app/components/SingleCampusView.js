import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import {fetchCampusAndItsStudents} from '../redux/singleCampus'
import SingleStudent from './SingleStudent'
import {unregisterStudentThunk} from '../redux/singleCampus'

export class SingleCampusView extends React.Component {
  constructor() {
    super()

    this.unregister = this.unregister.bind(this)
  }
   
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.loadCampusAndItsStudents(id);
  };

  async unregister(id) {
    await this.props.unregisterThisStudent(id)
    this.forceUpdate()
  };

  render () {
    if (this.props.campusAndItsStudents) {
      if (this.props.campusAndItsStudents[0].students.length) {
        var renderStudentsFromCampus =
        <div className='allItems'>
          {this.props.campusAndItsStudents[0].students.map(student => 
            <div key={student.id} className='singleItemOnSingleCampus'>
              <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl} />
              <div className='centerThis marginSmallTop'>GPA: {student.gpa}</div>
              <div className='centerThis'>
                <button onClick={() => this.unregister(student.id)}>Unregister</button>
              </div>
            </div>
          )}
        </div>
      } else {
        var renderStudentsFromCampus = <div className='allItems marginBottom marginTop'>No students enrolled here yet!</div>
      };
    };
    return this.props.campusAndItsStudents ? (
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

const mapState = (state) => {
  return {
    campusAndItsStudents: state.campusAndItsStudents.data
  };
};
  
const mapDispatch = (dispatch) => {
  return {
    loadCampusAndItsStudents: (id) => dispatch(fetchCampusAndItsStudents(id)),
    unregisterThisStudent: (id) => dispatch(unregisterStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(SingleCampusView)