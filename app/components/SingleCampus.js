import React from 'react'
import { Link } from 'react-router-dom'

const SingleCampus = (props) => {
    return (
        <div>
            <div className='centerThis'>
                <Link to={`/campuses/${props.listId}`}><img src={props.imageUrl} alt="image" className="smallImage"></img></Link>
            </div>  
            <div>    
                <div className="centerThis"><Link to={`/campuses/${props.listId}`}>{props.name}</Link></div>
            </div>    
        </div>    
    );
};

export default SingleCampus