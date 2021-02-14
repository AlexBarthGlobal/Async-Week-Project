import axios from 'axios'

const EDIT_STUDENT = 'EDIT_STUDENT'

export const editStudent = (student) => {
    return {
        type: EDIT_STUDENT,
        student
    };
};

export const editStudentThunk = (student, history) => {
  return async (dispatch) => {
    try {
      const addedStudent = (await axios.put(`/api/students/edit/${student.studentId}`, student.data)).data
      dispatch(addStudent(addedStudent))
      history.push(student.prevUrl.prevUrl)
    } catch (err) {
      console.log('error')
    }
  };
};

///

const DELETE_STUDENT = 'DELETE_STUDENT'

export const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student
  };
};

export const deleteStudentThunk = (student) => {
  return async (dispatch) => {
    try { 
      await axios.delete(`/api/students/${student}`)
        dispatch(deleteStudent(student))
    } catch (err) {
      console.log(err)
    }
  };
};

///

const ADD_STUDENT = 'ADD_STUDENT'

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student
  };
};

export const addStudentThunk = (student, history) => {
  return async (dispatch) => {
    try {
      const addedStudent = (await axios.post(`/api/students/addstudent`, student)).data
      dispatch(addStudent(addedStudent))
      history.push('/students')
    } catch (err) {
      console.log('error')
    }
  };
};

///

const SET_STUDENTS = 'SET_STUDENTS'

export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students
  };
};

export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      const returnedStudents = await axios.get('/api/students')
      dispatch(setStudents(returnedStudents))
    } catch (err) {
      console.log(err)
    }
  };
};

///

const initialState = {};

export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students
    case ADD_STUDENT:
      return [...state, action.student]
    case DELETE_STUDENT:
      const deletedStudentReturn = state.data.filter(student => student.id !== action.student);
      return {...state, data: deletedStudentReturn}
    case EDIT_STUDENT:
      return state.map(student => student.id === action.student.id ? action.student : student);
    default:
      return state
  };
};