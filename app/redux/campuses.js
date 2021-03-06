import axios from 'axios'

const EDIT_CAMPUS = 'EDIT_CAMPUS'

export const editCampus = (campus) => {
  return {
    type: EDIT_CAMPUS,
    campus
  };
};

export const editCampusThunk = (campus, history) => {
  return async (dispatch) => {
    try {
      const addedCampus = (await axios.put(`/api/campuses/edit/${campus.campusId}`, campus.data)).data   
      dispatch(addCampus(addedCampus))
      history.push(campus.prevUrl.prevUrl)
    } catch (err) {
      console.log('error')
    }
  };
};

///

const DELETE_CAMPUS = 'DELETE_CAMPUS'

export const deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus
  };
};

export const deleteCampusThunk = (campus) => {
  return async (dispatch) => {
    try { 
      await axios.delete(`/api/campuses/${campus}`)
      dispatch(deleteCampus(campus))
    } catch (err) {
      console.log(err)
    }
  };
};

///

const ADD_CAMPUS = 'ADD_CAMPUS'

export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};

export const addCampusThunk = (campus, history) => {
  return async (dispatch) => {
    try {
      const addedCampus = (await axios.post(`/api/campuses/addcampus`, campus.data)).data
      dispatch(addCampus(addedCampus))
      history.push('/campuses')
    } catch (err) {
      console.log('error')
    }
  };
};

///

const SET_CAMPUSES = 'SET_CAMPUSES'

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  };
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const returnedCampuses = await axios.get('/api/campuses')
      dispatch(setCampuses(returnedCampuses))
    } catch (err) {
      console.log(err)
    }
  };
};

///

const initialState = {};

export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses
    case ADD_CAMPUS:
      return [...state, action.campus]
    case DELETE_CAMPUS:
      const deletedCampusReturn = state.data.filter(campus => campus.id !== action.campus)
      return {...state, data: deletedCampusReturn}
    case EDIT_CAMPUS:
      return state.map(campus => campus.id === action.campus.id ? action.campus : campus);
    default:
      return state
  };
};