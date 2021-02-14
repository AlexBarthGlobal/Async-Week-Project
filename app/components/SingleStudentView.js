import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import {fetchStudentAndTheirCampus} from '../redux/singleStudent'
import SingleCampus from './SingleCampus'

export class SingleStudentView extends React.Component {
   
  componentDidMount() {
    if (!this.props.campuses) { 
    const {id} = this.props.match.params;
    this.props.loadStudentAndTheirCampus(id);
    };
  };
    
  render () {
    console.log('PROPS LOADED')
    console.log(this.props)

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
    return this.props.studentAndTheirCampus ? (
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

const mapState = (state) => {
  return {
      studentAndTheirCampus: state.studentAndTheirCampus.data,
  };
};
  
const mapDispatch = (dispatch) => {
  return {
    loadStudentAndTheirCampus: (id) => dispatch(fetchStudentAndTheirCampus(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleStudentView)