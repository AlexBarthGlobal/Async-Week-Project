import React from 'react'
import { Link } from 'react-router-dom'

const SingleStudent = (props) => {
   
    //Fix what we're returning
    return(
        <div>
        <Link to={`/students/${props.listId}`}>{`${props.firstName} ${props.lastName}`}</Link>
        </div>    
    )
}

export default SingleStudent