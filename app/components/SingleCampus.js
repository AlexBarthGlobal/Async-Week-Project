import React from 'react'
import { Link } from 'react-router-dom'
// import { deleteCampusThunk } from '../redux/campuses'
import { connect } from 'react-redux'

// Original code
//Come back and fix imageeUrl to imageUrl when you fix CSS
const SingleCampus = (props) => {
    
    return(
        <div>
        <Link to={`/campuses/${props.listId}`}>{props.name}</Link>
        <div id="image">
        <Link to={`/campuses/${props.listId}`}><img src={props.imageeUrl} alt="image"></img></Link>
        </div>
        {/* <button className='delete' onClick={() => props.deleteCampus(props.listId)}>Delete</button> */}
        <div>SingleCampus Dummy Component</div>
        </div>    
    )
}

export default SingleCampus

// const mapDispatch = (dispatch) => {
//     return {
//     deleteCampus: (campus) => dispatch(deleteCampusThunk(campus))
//     };      
// };

// export default connect(null, null)(SingleCampus) 





// Come back and fix imageeUrl to imageUrl when you fix CSS
// class SingleCampus extends React.Component {
   
//     render() {
//         console.log('YOOOOOOO')
//         console.log(this.props)
//     return(
//         <div>
//         <Link to={`/campuses/${this.props.listId}`}>{this.props.name}</Link>
//         <div id="image">
//         <Link to={`/campuses/${this.props.listId}`}><img src={this.props.imageeUrl} alt="image"></img></Link>
//         </div>
//         <button className='delete' onClick={() => this.props.deleteCampus(this.props.listId)}>Delete</button>
//         <div>SingleCampus Dummy Component</div>
//         </div>    
//     )
//     }
// }

// const mapDispatch = (dispatch, history) => {
//     return {
//     deleteCampus: (campus) => dispatch(deleteCampusThunk(campus, history))
//     };      
// };

// const mapState = (state) => {
//     console.log("THIS IS THE STATE!!!!!")
//     console.log(state)
//     return {
//       students: state
//     };
//   };

// export default connect(mapState, mapDispatch)(SingleCampus) 

// export default connect (null, (dispatch, { history })=> { return { deleteCampus: (campus)=> dispatch(deleteCampusThunk(campus, history))};})(SingleCampus)









