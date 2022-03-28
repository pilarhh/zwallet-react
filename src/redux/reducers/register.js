/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchRegister = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return {...state, loading: true}
        case 'REGISTER_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'REGISTER_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchRegister