import axios from 'axios'

const EDIT_CAMPUS = 'EDIT_CAMPUS'

export const editCampus = (campus) => {
    return {
        type: EDIT_CAMPUS,
        campus
    }
}

export const editCampusThunk = (campus, history) => {
    return async (dispatch) => {
        try {
          console.log('THIS IS THE DATA IN THE THUNK')
          console.log(campus)
            const addedCampus = (await axios.put(`/api/campuses/edit/${campus.campusId}`, campus.data)).data
            console.log('THIS IS THE CAMPUS EDITED')
            console.log(addedCampus)
            dispatch(addCampus(addedCampus))
            history.push(campus.prevUrl.prevUrl)
            // history.push('/campuses')  // '/campuses'
        } catch (err) {
            console.log('error')
        }
    }
};


///


const DELETE_CAMPUS = 'DELETE_CAMPUS'

export const deleteCampus = (campus) => {
    return {
        type: DELETE_CAMPUS,
        campus
    }
}

export const deleteCampusThunk = (campus) => {
  console.log("runningThunk")
    return async (dispatch) => {
        try { 
            console.log(campus)         
            // const deletedCampus = (await axios.delete(`/api/campuses/${campus}`)).data
            await axios.delete(`/api/campuses/${campus}`)
            console.log('CAMPUS DELETED')
            // console.log(deletedCampus)
            dispatch(deleteCampus(campus))
            // history.push('/campuses')
        } catch (err) {
            console.log(err)
        }
    }
};




/////

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
            const addedCampus = (await axios.post(`/api/campuses/addcampus`, campus.data)).data
            console.log('THIS IS THE CAMPUS ADDED')
            console.log(addedCampus)
            dispatch(addCampus(addedCampus))
            history.push('/campuses')  // '/campuses'
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
    case DELETE_CAMPUS:
      console.log("THIS IS THE STATE")
      console.log(state)
      return state.data.filter(campus => campus.id !== action.campus)
    case EDIT_CAMPUS:
      return state.map(campus => campus.id === action.campus.id ? action.campus : campus);
    default:
      return state
  }
}
