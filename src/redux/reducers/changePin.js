/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchChangePin = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PUT_PIN_REQUEST':
            return {...state, loading: true}
        case 'PUT_PIN_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'PUT_PIN_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchChangePin