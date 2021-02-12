import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import {fetchStudentAndTheirCampus} from '../redux/singleStudent'
import SingleCampus from './SingleCampus'

export class SingleStudentView extends React.Component {
   
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.loadStudentAndTheirCampus(id);
      }

      
    render () {
        if (this.props.studentAndTheirCampus) { //This code will run after the initial render, after the dispatch/store updates
            console.log('PROPS ON SINGLE STUDENT VIEW')
            console.log(this.props)
            // if (String(this.props.studentAndTheirCampus[0].gpa.length === 1) {
            // // var floatGPA = this.props.studentAndTheirCampus[0].gpa + 0
            //   console.log("nice")
            // } else {
            //   var floatGPA = this.props.studentAndTheirCampus[0].gpa
            // }
            if (this.props.studentAndTheirCampus[0].campusInfo) { //This is checking if the student is enrolled to a campus
              var renderSingleCampus = <SingleCampus key={this.props.studentAndTheirCampus[0].campusInfo[0].id} listId={this.props.studentAndTheirCampus[0].campusInfo[0].id} name={this.props.studentAndTheirCampus[0].campusInfo[0].campusName} imageUrl={this.props.studentAndTheirCampus[0].campusInfo[0].imageUrl} />
            } else {
              var renderSingleCampus = <div>Not enrolled yet!</div>
            }
        }

        //Come back and add a CSS class to this image
        return this.props.studentAndTheirCampus ? (
            <div>
              <div>singleStudentView</div>
              <div id={'singleStudentView'}>
                <div>{this.props.studentAndTheirCampus[0].firstName} {this.props.studentAndTheirCampus[0].lastName}</div>
                <img src={this.props.studentAndTheirCampus[0].imageUrl} alt="image"></img>
                <div>{this.props.studentAndTheirCampus[0].email}</div>
                <div>{this.props.studentAndTheirCampus[0].gpa}</div>
                {/* {floatGPA} */}
                <button><Link to={{pathname: `/students/edit/${this.props.studentAndTheirCampus[0].id}`, state:{prevUrl: location.pathname}}}>Edit Student</Link></button>
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
    }
}

const mapState = (state) => {
    return {
        studentAndTheirCampus: state.studentAndTheirCampus.data
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
      loadStudentAndTheirCampus: (id) => dispatch(fetchStudentAndTheirCampus(id))
    };
  };

export default connect(mapState, mapDispatch)(SingleStudentView)