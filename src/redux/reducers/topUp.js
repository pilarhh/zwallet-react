/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchTopup = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'TOPUP_REQUEST':
            return {...state, loading: true}
        case 'TOPUP_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'TOPUP_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchTopup