const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchExpense = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_EXPENSE_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'GET_EXPENSE_SUCCESS':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'GET_EXPENSE_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            };
        default:
            return state;
    }
}
export default FetchExpense;