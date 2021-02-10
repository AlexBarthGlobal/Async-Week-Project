import axios from 'axios'

//Action label
const SET_STUDENTS = 'SET_STUDENTS'

//Action creator
export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students
  }
};

//Thunk
export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      const returnedStudents = await axios.get('/api/students')
      dispatch(setStudents(returnedStudents))
    } catch (err) {
      console.log(err)
    }
  }
};

const initialState = {};
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students
    default:
      return state
  }
}
