import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import {fetchStudentAndTheirCampus} from '../redux/singleStudent'
import SingleCampus from './SingleCampus'

export class SingleStudentView extends React.Component {
   
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.loadStudentAndTheirCampus(id);
  };
    
  render () {
    if (this.props.studentAndTheirCampus) {
      if (this.props.studentAndTheirCampus[0].campusInfo) {
        var renderSingleCampus = 
        <div className='singleItem'>
          <div className='centerThis marginBottom'>Currently Enrolled:</div>  
          <SingleCampus key={this.props.studentAndTheirCampus[0].campusInfo[0].id} listId={this.props.studentAndTheirCampus[0].campusInfo[0].id} name={this.props.studentAndTheirCampus[0].campusInfo[0].campusName} imageUrl={this.props.studentAndTheirCampus[0].campusInfo[0].imageUrl} />
        </div>
      } else {
        var renderSingleCampus = <div className='marginBottom marginTop'>Student is not enrolled yet!</div>
      };
    };

    return this.props.currStudentInfo ? (
      <div className='flex'>
        <div className='centerThis'>
          <div className='marginTop'>{this.props.currStudentInfo[0].firstName} {this.props.currStudentInfo[0].lastName}</div>
          <img src={this.props.currStudentInfo[0].imageUrl} alt="image" className='studentLargeImage'></img>
          <div className='marginBottom'>Email: {this.props.currStudentInfo[0].email}</div>
          <div className='marginBottom'>GPA: {this.props.currStudentInfo[0].gpa}</div>
          <Link to={{pathname: `/students/edit/${this.props.currStudentInfo[0].id}`, state:{prevUrl: location.pathname}}} className=''><button>Edit Student</button></Link>
        </div>
        <div className='allItems'>
          {renderSingleCampus}
        </div>
      </div>    
    )
    : this.props.studentAndTheirCampus ? (
      <div className='flex'>
        <div className='centerThis'>
          <div className='marginTop'>{this.props.studentAndTheirCampus[0].firstName} {this.props.studentAndTheirCampus[0].lastName}</div>
          <img src={this.props.studentAndTheirCampus[0].imageUrl} alt="image" className='studentLargeImage'></img>
          <div className='marginBottom'>Email: {this.props.studentAndTheirCampus[0].email}</div>
          <div className='marginBottom'>GPA: {this.props.studentAndTheirCampus[0].gpa}</div>
          <Link to={{pathname: `/students/edit/${this.props.studentAndTheirCampus[0].id}`, state:{prevUrl: location.pathname}}} className=''><button>Edit Student</button></Link>
        </div>
        <div className='allItems'>
          {renderSingleCampus}
        </div>
      </div>    
    )
    :
    ( 
      <div>
        <div>Single Student View</div>
        <div>Loading</div>
      </div>
    )
  };
};

const mapState = (state, {match}) => {
  console.log(state)
  const currStudentInfo = state.students.data ? state.students.data.filter(student => student.id == match.params.id*1) : null;
  if (currStudentInfo) {
  var currCampus = state.campuses.data ? state.campuses.data.filter(campus => campus.id == currStudentInfo[0].campusId) : null;
  };
  return {
      studentAndTheirCampus: state.studentAndTheirCampus.data,
      currStudentInfo,
      currCampus
  };
};
  
const mapDispatch = (dispatch) => {
  return {
    loadStudentAndTheirCampus: (id) => dispatch(fetchStudentAndTheirCampus(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleStudentView)