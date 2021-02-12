import React from 'react'
import { Link } from 'react-router-dom'
import { deleteStudentThunk } from '../redux/students'
import { connect } from 'react-redux'

//Come back and fix imageeUrl to imageUrl when you fix CSS
const SingleStudent = (props) => {
   
    return(
        <div>
        <div id='image'>
        <Link to={`/students/${props.listId}`}><img src={props.imageeUrl} alt="image"></img></Link>
        </div>
        <Link to={`/students/${props.listId}`}>{`${props.firstName} ${props.lastName}`}</Link>
        {/* <button className='delete' onClick={() => props.deleteStudent(props.listId)}>Delete</button> */}
        <div>Student Dummy Component</div>
        </div>    
    )
}

export default SingleStudent

// const mapDispatch = (dispatch) => {
//     return {
//     deleteStudent: (student) => dispatch(deleteStudentThunk(student))
//     };      
// };

// export default connect(null, mapDispatch)(SingleStudent) 



// export default SingleStudent