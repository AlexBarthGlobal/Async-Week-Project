import React from 'react'
import { Link } from 'react-router-dom'


//props.imagee before fixing CSS
const SingleCampus = (props) => {
   
    return(
        <div>
        <div id="image">
        <Link to={`/campuses/${props.listId}`}><img src={props.imagee} alt="image"></img></Link>
        </div>
        <Link to={`/campuses/${props.listId}`}>{props.name}</Link>
        </div>    
    )
}

export default SingleCampus