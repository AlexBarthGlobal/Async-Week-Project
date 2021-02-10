import axios from 'axios'

const SET_STUDENT_AND_THEIR_CAMPUS = 'SET_STUDENT_AND_THEIR_CAMPUS'

export const setStudentAndTheirCampus = (studentAndTheirCampus) => {
    return {
        type: SET_STUDENT_AND_THEIR_CAMPUS,
        studentAndTheirCampus
    }
}

//Making two axios requests. Getting the Student's info,
//Then taking the campusId out of the student's info, and making the second axios request
//To get the info about the student's campus.
//Then I add the student's campus info to what I'm going to dispatch (returnedStudentAndTheirCampus)
//So now I can access the student's info and their campus info on the single student view.
export const fetchStudentAndTheirCampus = (id) => {
    return async (dispatch) => {
        try {
            const returnedStudentAndTheirCampus = await axios.get(`/api/students/${id}`)
            // console.log('THIS IS THE DATA FETCHED')
            // console.log(returnedStudentAndTheirCampus)
            const theirCampusId = returnedStudentAndTheirCampus.data[0].campusId
            // console.log(theirCampusId)
            if (theirCampusId) { //This will prevent bad request if a student has null campusId (unassigned campus)
                const theirCampusInfo = await axios.get(`/api/campuses/${theirCampusId}`)
            // console.log('THIS IS THE STUDENTS CAMPUS INFO')
            // console.log(theirCampusInfo.data)
                returnedStudentAndTheirCampus.data[0].campusInfo = theirCampusInfo.data
            }

            dispatch(setStudentAndTheirCampus(returnedStudentAndTheirCampus))
        } catch (err) {
            console.log(err)
        }
    }
};

const initialState = {};

export default function singleStudentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STUDENT_AND_THEIR_CAMPUS:
            return action.studentAndTheirCampus
        default:
            return state
    }
}