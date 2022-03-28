import axios from "axios";

export const getExpenseRequest = () => {
    return {
        type: "GET_EXPENSE_REQUEST"
    }
}

export const getExpenseSuccess = (data) => {
    return {
        type: "GET_EXPENSE_SUCCESS",
        payload: data
    }
}

export const getExpenseFail = (payload) => {
    return {
        type: "GET_EXPENSE_FAIL",
        payload
    }
}

export const getExpense = (id) => {
    return (dispatch) => {
        dispatch(getExpenseRequest())
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/transaction/expense/${id}`,
            }).then((res) => {
                const data = res.data?.data[0]
                dispatch(getExpenseSuccess(data))
                console.log(data);
            }).catch((err) => {
                const message = err.message
                dispatch(getExpenseFail(message))
            })
    }
}