import axios from 'axios'

//Action label
const SET_CAMPUSES = 'SET_CAMPUSES'

//Action creator
export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  }
};

//Thunk
export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const returnedCampuses = await axios.get('/api/campuses')
      dispatch(setCampuses(returnedCampuses))
    } catch (err) {
      console.log(err)
    }
  }
};


const initialState = {};
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses
    default:
      return state
  }
}
