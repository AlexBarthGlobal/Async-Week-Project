import axios from 'axios'

const DELETE_STUDENT = 'DELETE_STUDENT'

export const deleteStudent = (student) => {
    return {
        type: DELETE_STUDENT,
        student
    }
}

export const deleteStudentThunk = (student) => {
  console.log("runningThunk")
    return async (dispatch) => {
        try { 
            console.log(student)         
            // const deletedCampus = (await axios.delete(`/api/campuses/${campus}`)).data
            await axios.delete(`/api/students/${student}`)
            console.log('STUDENT DELETED')
            // console.log(deletedCampus)
            dispatch(deleteStudent(student))
            // history.push('/campuses')
        } catch (err) {
            console.log(err)
        }
    }
};




/////

const ADD_STUDENT = 'ADD_STUDENT'

export const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        student
    }
}

export const addStudentThunk = (student, history) => {
    return async (dispatch) => {
        try {
            const addedStudent = (await axios.post(`/api/students/addstudent`, student)).data
            console.log('THIS IS THE CAMPUS ADDED')
            console.log(addedStudent)
            dispatch(addStudent(addedStudent))
            history.push('/students')
        } catch (err) {
            console.log('error')
        }
    }
};

/////





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
    case ADD_STUDENT:
      return [...state, action.student]
    case DELETE_STUDENT:
      console.log("THIS IS THE STATE")
      console.log(state)
      return state.data.filter(student => student.id !== action.student)
    default:
      return state
  }
}
