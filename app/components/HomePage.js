import React from 'react'
import { connect } from "react-redux";
import {fetchStudents} from '../redux/students'
import {fetchCampuses} from '../redux/campuses'

export class HomePage extends React.Component {
    
    componentDidMount() {
        if (!this.props.students) {
            this.props.loadStudents()
        };
        if (!this.props.campuses) {
            this.props.loadCampuses()
        };
    };
       
    render () {
        return (
            <div className='centerThis marginTop'>Welcome! Select Campuses or Students in the nav bar to get started!</div>
        )
    };
};

const mapState = (state) => {
    return {
        students: state.students.data,
        campuses: state.campuses.data
    };
};

const mapDispatch = (dispatch) => {
    return {
        loadStudents: () => dispatch(fetchStudents()),
        loadCampuses: () => dispatch(fetchCampuses())
    };
};

export default connect(mapState, mapDispatch)(HomePage)