import React from 'react'
import { Link } from 'react-router-dom'

//Come back and fix imageeUrl to imageUrl when you fix CSS
const SingleStudent = (props) => {

    console.log(props)
   
    return(
        <div>
        <Link to={`/students/${props.listId}`}>{`${props.firstName} ${props.lastName}`}</Link>
        <Link to={`/students/${props.listId}`}><img src={props.imageeUrl} alt="image"></img></Link>
        <div>Student Dummy Component</div>
        </div>    
    )
}

export default SingleStudent