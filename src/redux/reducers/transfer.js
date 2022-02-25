/* eslint-disable default-case */
const initialState = {
    data : [],
    loading: false,
    error: false
}

const FetchTransfer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'TRANSFER_REQUEST':
            return {...state, loading: true}
        case 'TRANSFER_SUCCESS':
            return {...state, loading: false, data: action.payload}
        case 'TRANSFER_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state
        
    }
}

export default FetchTransfer