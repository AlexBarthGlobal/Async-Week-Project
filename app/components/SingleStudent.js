import React from 'react'
import { Link } from 'react-router-dom'
import Page404 from './page404'

const SingleStudent = (props) => {
    
    return (
        <div>
            <div className='centerThis'>
                <Link to={`/students/${props.listId}`}><img src={props.imageUrl} alt="image" className="smallImage"></img></Link>
            </div>
            <div>
                <div className='centerThis'><Link to={`/students/${props.listId}`}>{`${props.firstName} ${props.lastName}`}</Link></div>
            </div>
        </div>    
    );
};

export default SingleStudent