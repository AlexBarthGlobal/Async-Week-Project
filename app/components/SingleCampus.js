import React from 'react'
import { Link } from 'react-router-dom'

//Come back and fix imageeUrl to imageUrl when you fix CSS
const SingleCampus = (props) => {
   
    return(
        <div>
        <Link to={`/campuses/${props.listId}`}>{props.name}</Link>
        <div id="image">
        <Link to={`/campuses/${props.listId}`}><img src={props.imageeUrl} alt="image"></img></Link>
        </div>
        <div>SingleCampus Dummy Component</div>
        </div>    
    )
}

export default SingleCampus