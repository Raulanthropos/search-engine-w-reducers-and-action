import { GET_JOBS_LIST } from "../actions";

const initialState = {
        result: []
}

const jobReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_JOBS_LIST:
            return {
                ...state,
                result: action.payload,
            }
        default:
        return state
    }
}

export default jobReducer;