import React from "react";
import { connect } from "react-redux";
import {fetchCampuses} from '../redux/campuses'
import SingleCampus from './SingleCampus'
import { Link } from 'react-router-dom'
import { deleteCampusThunk } from '../redux/campuses'
import {fetchStudents} from '../redux/students'
import {Redirect} from 'react-router-dom'

export class AllCampuses extends React.Component {
 
  componentDidMount() {
    if (!this.props.campuses) {
      this.props.loadCampuses()
    };
    if (!this.props.students) {
      this.props.loadStudents()
    }
  };

  render() {
    if (this.props.user.id) {
      var AddCampus = <Link to={`/addcampus`}><button>Add Campus</button></Link>
    }

    var noCampusesMessage = !this.props.user.id ? <div className='marginTop'>No campuses to display! Come back later!</div> : <div className='marginTop'>No campuses to display! Click Add Campus</div>


    if (this.props.campuses) { 
      if (this.props.campuses.length > 0) {
        if (!this.props.user.id) {
          var allCampuses = this.props.campuses.sort(function(a,b) {
            var nameA=a.campusName.toLowerCase(), nameB=b.campusName.toLowerCase()
              if (nameA < nameB)
                return -1;
              if (nameA > nameB)
                return 1;
              return 0;
          }).map(campus =>
            <div key={campus.id} className="singleItemNotLogged">
              <SingleCampus listId={campus.id} name={campus.campusName} imageUrl={campus.imageUrl} />
            </div>
            )    
        } else if (this.props.user.id) {
          var allCampuses = this.props.campuses.sort(function(a,b) {
            var nameA=a.campusName.toLowerCase(), nameB=b.campusName.toLowerCase()
              if (nameA < nameB)
                return -1;
              if (nameA > nameB)
                return 1;
              return 0;
          }).map(campus =>
            <div key={campus.id} className="singleItem">
              <SingleCampus listId={campus.id} name={campus.campusName} imageUrl={campus.imageUrl} />
              <div className='centerThis'>
                <button onClick={() => this.props.deleteCampus(campus.id)}>Delete</button>
              </div>
            </div>
            )
        }

        return (
          <div>
            <div className='centerThis marginTop'>
              <div>All Campuses</div>
              {/* <Link to={`/addcampus`}><button>Add Campus</button></Link> */}
              {AddCampus}
            </div>
            <div className="allItems">
              {allCampuses}
            </div>
          </div>
        )
      }
    } else {
        return (
          <div>
            <div>All Campuses</div>
            <div>Loading</div>
          </div>   
        )
      }
    return ( 
      <div className='centerThis marginTop'>
        <div>All Campuses</div>
          {/* <Link to={`/addcampus`}><button>Add Campus</button></Link> */}
          {AddCampus}
          {noCampusesMessage}
      </div>
    )
  };
};

const mapState = (state) => {
  return {
    campuses: state.campuses.data,
    students: state.students.data,
    user: state.userReducer.user
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (campus) => dispatch(deleteCampusThunk(campus)),
    loadStudents: () => dispatch(fetchStudents())
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);