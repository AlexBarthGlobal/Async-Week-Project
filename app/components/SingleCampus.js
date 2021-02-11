import React from 'react'
import { Link } from 'react-router-dom'
import { deleteCampusThunk } from '../redux/campuses'
import { connect } from 'react-redux'

//Come back and fix imageeUrl to imageUrl when you fix CSS
const SingleCampus = (props) => {
    
    const deleteCampusInvoke = (campus) => {
       props.deleteCampus(campus)
    }
   
    return(
        <div>
        <Link to={`/campuses/${props.listId}`}>{props.name}</Link>
        <div id="image">
        <Link to={`/campuses/${props.listId}`}><img src={props.imageeUrl} alt="image"></img></Link>
        </div>
        <button className='delete' onClick={() => deleteCampusInvoke(props.listId)}>Delete</button>
        <div>SingleCampus Dummy Component</div>
        </div>    
    )
}

const mapDispatch = (dispatch, history) => {
    return {
    deleteCampus: (campus) => dispatch(deleteCampusThunk(campus, history))
    };      
};

export default connect(null, mapDispatch)(SingleCampus) 















// import React from 'react'
// import { Link } from 'react-router-dom'
// import { deleteCampusThunk } from '../redux/campuses'

// //Come back and fix imageeUrl to imageUrl when you fix CSS
// const SingleCampus = (props) => {

//     const deleteCampus = (campus) => {
//        deleteCampusThunk(campus)
//     }
   
//     return(
//         <div>
//         <Link to={`/campuses/${props.listId}`}>{props.name}</Link>
//         <div id="image">
//         <Link to={`/campuses/${props.listId}`}><img src={props.imageeUrl} alt="image"></img></Link>
//         </div>
//         <button className='delete' onClick={() => deleteCampus(props.listId)}>Delete</button>
//         <div>SingleCampus Dummy Component</div>
//         </div>    
//     )
// }

// export default SingleCampus







// const SingleCampus = (props) => {
   
//     return(
//         <div>
//         <Link to={`/campuses/${props.listId}`}>{props.name}</Link>
//         <div id="image">
//         <Link to={`/campuses/${props.listId}`}><img src={props.imageeUrl} alt="image"></img></Link>
//         </div>
//         <div>Delete</div>
//         <div>SingleCampus Dummy Component</div>
//         </div>    
//     )
// }

// export default SingleCampus