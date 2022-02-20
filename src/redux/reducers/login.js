/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchLogin = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {...state, loading: true}
        case 'LOGIN_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'LOGIN_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchLogin