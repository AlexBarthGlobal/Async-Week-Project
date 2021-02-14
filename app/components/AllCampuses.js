import React from "react";
import { connect } from "react-redux";
import {fetchCampuses} from '../redux/campuses'
import SingleCampus from './SingleCampus'
import { Link } from 'react-router-dom'
import { deleteCampusThunk } from '../redux/campuses'

export class AllCampuses extends React.Component {

  componentDidMount() {
    if (!this.props.campuses) {
      this.props.loadCampuses();
    };
  };

  render() {    
    if (this.props.campuses) { 
      if (this.props.campuses.length > 0) {
        return (
          <div>
            <div className='centerThis marginTop'>
              <div>All Campuses</div>
              <Link to={`/addcampus`}><button>Add Campus</button></Link>
            </div>
            <div className="allItems">{this.props.campuses.map(campus =>
              <div key={campus.id} className="singleItem">
                <SingleCampus listId={campus.id} name={campus.campusName} imageUrl={campus.imageUrl} />
                <div className='centerThis'>
                  <button onClick={() => this.props.deleteCampus(campus.id)}>Delete</button>
                </div>
              </div>
              )}       
            </div>
          </div>
        )
      }
    } else {
        this.props.loadCampuses()
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
        <Link to={`/addcampus`}><button>Add Campus</button></Link>
        <div className='marginTop'>No campuses to display! Click Add Campus</div>
      </div>
    )
  };
};

const mapState = (state) => {
  return {
    campuses: state.campuses.data
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (campus) => dispatch(deleteCampusThunk(campus))
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);