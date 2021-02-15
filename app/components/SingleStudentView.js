import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import {fetchStudentAndTheirCampus} from '../redux/singleStudent'
import SingleCampus from './SingleCampus'
import {fetchCampuses} from '../redux/campuses'
import {changeStudentCampusThunk} from '../redux/singleStudent'
import {fetchStudents} from '../redux/students'

export class SingleStudentView extends React.Component {
  constructor(props) {
    super(props)

    this.updateToSelectedCampus = this.updateToSelectedCampus.bind(this)
  }
   
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.loadStudentAndTheirCampus(id);
    if (!this.props.campuses) {
      this.props.loadCampuses();
    }
    if (!this.props.students) {
      this.props.loadStudents();
    }
  };

  updateToSelectedCampus(event) {
    this.props.changeCampus({student: this.props.match.params.id, campus: {data: event.target.value}});
  }
    
  render () {
    const changeCampusMenu = this.props.studentAndTheirCampus && this.props.campuses ? (
      <select onChange={this.updateToSelectedCampus} className='marginSide'>
        <option value ='none'>Change Campu...</option>
          {this.props.campuses.map(campus => {
            if (campus.id !== this.props.studentAndTheirCampus[0].campusInfo[0].id) {
              return <option key={campus.id} value={campus.id}>{campus.campusName}</option>
            }})}
      </select>  
    ) : (
      <div>Loading Campuses...</div>
    );

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
          <Link to={{pathname: `/students/edit/${this.props.currStudentInfo[0].id}`, state:{prevUrl: location.pathname}}} className=''><button className='marginSide'>Edit Student</button></Link>
          {changeCampusMenu}
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
          <Link to={{pathname: `/students/edit/${this.props.studentAndTheirCampus[0].id}`, state:{prevUrl: location.pathname}}} className=''><button className='marginSide'>Edit Student</button></Link>
          {changeCampusMenu}
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
  console.log('HERES THE STATE')
  console.log(state)
  const currStudentInfo = state.students.data ? state.students.data.filter(student => student.id == match.params.id*1) : null;
  if (currStudentInfo) {
  var currCampus = state.campuses.data ? state.campuses.data.filter(campus => campus.id == currStudentInfo[0].campusId) : null;
  };
  if (state.campuses.data) {
    var campuses = state.campuses.data
  }
  return {
      studentAndTheirCampus: state.studentAndTheirCampus.data,
      currStudentInfo,
      currCampus,
      campuses,
      students: state.students.data

  };
};
  
const mapDispatch = (dispatch) => {
  return {
    loadStudentAndTheirCampus: (id) => dispatch(fetchStudentAndTheirCampus(id)),
    loadCampuses: () => dispatch(fetchCampuses()),
    changeCampus: (id) => dispatch(changeStudentCampusThunk(id)),
    loadStudents: () => dispatch(fetchStudents())
  };
};

export default connect(mapState, mapDispatch)(SingleStudentView)