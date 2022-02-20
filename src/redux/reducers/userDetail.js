/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchUserDetail = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_DETAILS_REQUEST':
            return {...state, loading: true}
        case 'GET_DETAILS_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'GET_DETAILS_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchUserDetail