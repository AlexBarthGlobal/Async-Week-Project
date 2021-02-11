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

const initialState = {};

export default function addCampusReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CAMPUS:
            return [...state, action.campus]
        default:
            return state
    }
}