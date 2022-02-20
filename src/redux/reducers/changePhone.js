/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchChangePhone = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PUT_PHONE_REQUEST':
            return {...state, loading: true}
        case 'PUT_PHONE_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'PUT_PHONE_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchChangePhone