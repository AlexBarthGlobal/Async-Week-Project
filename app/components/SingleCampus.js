import React from 'react'
import { Link } from 'react-router-dom'

const SingleCampus = (props) => {
   
    return(
        <div>
        <div id="image">
        <Link to={`/campuses/${props.listId}`}><img src={props.image} alt="new"></img></Link>
        </div>
        <Link to={`/campuses/${props.listId}`}>{props.name}</Link>
        </div>    
    )
}

export default SingleCampus