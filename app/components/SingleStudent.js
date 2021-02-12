import React from 'react'
import { Link } from 'react-router-dom'
import { deleteStudentThunk } from '../redux/students'
import { connect } from 'react-redux'

const SingleStudent = (props) => {
   
    return(
        <div>
        <Link to={`/students/${props.listId}`}><img src={props.imageUrl} alt="image"></img></Link>
        <Link to={`/students/${props.listId}`}>{`${props.firstName} ${props.lastName}`}</Link>
        {/* <button className='delete' onClick={() => props.deleteStudent(props.listId)}>Delete</button> */}
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