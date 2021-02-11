import React from "react";
import { connect } from "react-redux";
import {fetchCampuses} from '../redux/campuses'
import SingleCampus from './SingleCampus'
import { Link } from 'react-router-dom'

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {

  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    if (this.props.campuses) {
    console.log('AllCampuses In Props')
    console.log(this.props.campuses)
    }
    
    return this.props.campuses ? 
      (
        <div>
        <div>All Campuses</div>
        <Link to={`/addcampus`}>Add Campus</Link>
        <div id='allCampuses'>{this.props.campuses.map(campus =>
          <SingleCampus key={campus.id} listId={campus.id} name={campus.campusName} imageUrl={campus.imageUrl} />  
          )}       
        </div>
        </div>
      ) 
    :
      ( 
        <div>
        <div>All Campuses</div>
        <div>Loading</div>
        </div>   
      )
  };
}

const mapState = (state) => {
  return {
    campuses: state.campuses.data
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadCampuses: () => dispatch(fetchCampuses())
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
