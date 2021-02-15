import axios from 'axios'

const CHANGE_STUDENT_CAMPUS = 'UPDATE_STUDENT_CAMPUS'

export const changeStudentCampus = (changedCampus) => {
    return {
        type: CHANGE_STUDENT_CAMPUS,
        changedCampus
    }
}

export const changeStudentCampusThunk = (ids) => {
    console.log(ids)
    return async (dispatch) => {
        try {
            await axios.put(`/api/students/register/${ids.student}`, ids.campus)
            const returnedNewCampus = await axios.get(`/api/campuses/${ids.campus.data}`)
            console.log('RETURNED NEW CAMPUS')
            console.log(returnedNewCampus)
            dispatch(changeStudentCampus(returnedNewCampus))
        } catch (err) {
            console.log(err)
        }
    }
}


///

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
        case CHANGE_STUDENT_CAMPUS:
            const newChangedCampus = {...state}
            if (newChangedCampus.data[0].campusInfo) {
            newChangedCampus.data[0].campusInfo[0] = action.changedCampus.data[0];
            return newChangedCampus;
            } else if (newChangedCampus.data[0]) {
                newChangedCampus.data[0].campusInfo = [1];
                newChangedCampus.data[0].campusInfo[0] = action.changedCampus.data[0];
                return newChangedCampus;
            }
        default:
            return state
    };
};