import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
// import student from '../../server/db/student';
import {fetchCampusAndItsStudents} from '../redux/singleCampus'
import SingleStudent from './SingleStudent'

export class SingleCampusView extends React.Component {
   
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.loadCampusAndItsStudents(id);
    }

    render () {
      if (this.props.campusAndItsStudents) { //This code will run after the initial render, after the dispatch/store updates
          console.log('PROPS ON SINGLE CAMPUS VIEW')
          console.log(this.props)

          if (this.props.campusAndItsStudents[0].students.length) { //This is checking if there are students enrolled to this campus
          var renderSingleCampus =
            <div>
              {this.props.campusAndItsStudents[0].students.map(student => 
                <SingleStudent key={student.id} listId={student.id} firstName={student.firstName} lastName={student.lastName} imageUrl={student.imageUrl} />
              )}
            </div>
          } else {
            var renderSingleCampus = <div>No students enrolled here yet!</div>
          }
      }

      //Come back and fix imageeUrl to imageUrl when you fix CSS
      return this.props.campusAndItsStudents ? (
          <div>
            <div>singleCampusView</div>
            <div id={'singleCampusView'}>
              <div>{this.props.campusAndItsStudents[0].campusName}</div>
              <img src={this.props.campusAndItsStudents[0].imageeUrl} alt="image"></img>
              <div>{this.props.campusAndItsStudents[0].address}</div>
              <div>{this.props.campusAndItsStudents[0].description}</div>
              <button><Link to={{pathname: `/campuses/edit/${this.props.campusAndItsStudents[0].id}`, state:{prevUrl: location.pathname}}}>Edit Campus</Link></button>
              {renderSingleCampus}



            </div> 
          </div>    
      )
      :
      ( 
        <div>
        <div>Single Campus View</div>
        <div>Loading</div>
        </div>
      )
  }
      
    // render () {
    //     if (this.props) {
    //         console.log('PROPS ON SINGLE CAMPUS VIEW')
    //         console.log(this.props)
    //     }

    //     return (
    //         <div>
    //         singleCampusView
    //         </div>    
    //     )
    // }
}

const mapState = (state) => {
    return {
      campusAndItsStudents: state.campusAndItsStudents.data
    };
  };
  
  const mapDispatch = (dispatch) => {
    return {
      loadCampusAndItsStudents: (id) => dispatch(fetchCampusAndItsStudents(id))
    };
  };

export default connect(mapState, mapDispatch)(SingleCampusView)