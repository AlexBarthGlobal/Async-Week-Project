import axios from 'axios'

const SET_CAMPUS_AND_ITS_STUDENTS = 'SET_CAMPUS_AND_ITS_STUDENTS'

export const setCampusAndItsStudents = (campusAndItsStudents) => {
    return {
        type: SET_CAMPUS_AND_ITS_STUDENTS,
        campusAndItsStudents
    }
}

export const fetchCampusAndItsStudents = (id) => {
    return async (dispatch) => {
        try {
            const returnedCampusAndItsStudents = await axios.get(`/api/campuses/${id}`)
            console.log('THIS IS THE DATA FETCHED')
            console.log(returnedCampusAndItsStudents)
            dispatch(setCampusAndItsStudents(returnedCampusAndItsStudents))
        } catch (err) {
            console.log(err)
        }
    }
};

const initialState = {};

export default function singleCampusReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CAMPUS_AND_ITS_STUDENTS:
            return action.campusAndItsStudents
        default:
            return state
    }
}