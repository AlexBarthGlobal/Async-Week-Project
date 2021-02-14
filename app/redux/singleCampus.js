import axios from 'axios'

const UNREGISTER_STUDENT = 'UNREGISTER_STUDENT'

export const unregisterStudent = (unregisteredStudent) => {
    return {
        type: UNREGISTER_STUDENT,
        unregisteredStudent
    };
};

export const unregisterStudentThunk = (id) => {
    return async (dispatch) => {
        try {
            const unregisteredStudent = await axios.put(`/api/students/unregister/${id}`)
            dispatch(unregisterStudent(unregisteredStudent))
        } catch (err) {
            console.log(err)
        }
    };
};

///

const SET_CAMPUS_AND_ITS_STUDENTS = 'SET_CAMPUS_AND_ITS_STUDENTS'

export const setCampusAndItsStudents = (campusAndItsStudents) => {
    return {
        type: SET_CAMPUS_AND_ITS_STUDENTS,
        campusAndItsStudents
    };
};

export const fetchCampusAndItsStudents = (id) => {
    return async (dispatch) => {
        try {
            const returnedCampusAndItsStudents = await axios.get(`/api/campuses/${id}`)
            dispatch(setCampusAndItsStudents(returnedCampusAndItsStudents))
        } catch (err) {
            console.log(err)
        }
    };
};

///

const initialState = {};

export default function singleCampusReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CAMPUS_AND_ITS_STUDENTS:
            return action.campusAndItsStudents
        case UNREGISTER_STUDENT:
            if (state) {
            const prevState = {...state}
            const newStudents = prevState.data[0].students.filter(student => 
                student.id !== action.unregisteredStudent.data.id
            )
            prevState.data[0].students = newStudents
            return prevState
            } else return state;
        default:
            return state
    };
};