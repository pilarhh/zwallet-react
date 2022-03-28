/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchUser = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_USERS_REQUEST':
            return {...state, loading: true}
        case 'GET_USERS_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'GET_USERS_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchUser