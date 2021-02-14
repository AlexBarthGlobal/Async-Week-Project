import axios from 'axios'

const SET_STUDENT_AND_THEIR_CAMPUS = 'SET_STUDENT_AND_THEIR_CAMPUS'

export const setStudentAndTheirCampus = (studentAndTheirCampus) => {
    return {
        type: SET_STUDENT_AND_THEIR_CAMPUS,
        studentAndTheirCampus
    }
}

export const fetchStudentAndTheirCampus = (id) => {
    return async (dispatch) => {
        try {
            const returnedStudentAndTheirCampus = await axios.get(`/api/students/${id}`)
            const theirCampusId = returnedStudentAndTheirCampus.data[0].campusId
            if (theirCampusId) {
                const theirCampusInfo = await axios.get(`/api/campuses/${theirCampusId}`)
                returnedStudentAndTheirCampus.data[0].campusInfo = theirCampusInfo.data
            }
            dispatch(setStudentAndTheirCampus(returnedStudentAndTheirCampus))
        } catch (err) {
            console.log(err)
        }
    };
};

///

const initialState = {};

export default function singleStudentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STUDENT_AND_THEIR_CAMPUS:
            return action.studentAndTheirCampus
        default:
            return state
    };
};