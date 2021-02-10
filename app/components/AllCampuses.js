import React from "react";
import { connect } from "react-redux";
import {fetchCampuses} from '../redux/campuses'
import SingleCampus from './SingleCampus'

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
        <div id='allCampuses'>{this.props.campuses.map(campus =>
          <SingleCampus key={campus.id} listId={campus.id} name={campus.name} image={campus.imageUrl} />  
          )}       
        </div>
      ) 
    :   
      ( 
        <div>Loading</div>   
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
