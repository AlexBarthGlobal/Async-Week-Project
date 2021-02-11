import axios from 'axios'

const ADD_CAMPUS = 'ADD_CAMPUS'

export const addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        campus
    }
}

export const addCampusThunk = (campus, history) => {
    return async (dispatch) => {
        try {
            const addedCampus = (await axios.post(`/api/campuses/addcampus`, campus)).data
            console.log('THIS IS THE CAMPUS ADDED')
            console.log(addedCampus)
            dispatch(addCampus(addedCampus))
            history.push('/campuses')
        } catch (err) {
            console.log('error')
        }
    }
};

/////





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
    case ADD_CAMPUS:
      return [...state, action.campus]
    default:
      return state
  }
}
