import React from 'react'
import { Link } from 'react-router-dom'
// import { deleteCampusThunk } from '../redux/campuses'
import { connect } from 'react-redux'

// Original code
const SingleCampus = (props) => {
    
    return(
        <div>
            <div className='centerThis'>
        <Link to={`/campuses/${props.listId}`}><img src={props.imageUrl} alt="image" className="smallImage"></img></Link>
            </div>  
            <div>    
        <div className="centerThis"><Link to={`/campuses/${props.listId}`}>{props.name}</Link></div>
            </div>    
        {/* <button className='delete' onClick={() => props.deleteCampus(props.listId)}>Delete</button> */}
        </div>    
    )
}

export default SingleCampus