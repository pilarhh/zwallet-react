/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchHistory = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_HISTORY_REQUEST':
            return {...state, loading: true}
        case 'GET_HISTORY_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'GET_HISTORY_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchHistory