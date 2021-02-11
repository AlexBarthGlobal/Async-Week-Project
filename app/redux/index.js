import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import singleCampusReducer from './singleCampus'
import singleStudentReducer from './singleStudent'
//import addCampusReducer from './addcampus'

const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  campusAndItsStudents: singleCampusReducer,
  studentAndTheirCampus: singleStudentReducer,
  //addedCampuses: addCampusReducer
})

export default appReducer
