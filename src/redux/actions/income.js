import axios from "axios";

export const getIncomeRequest = () => {
    return {
        type: "GET_INCOME_REQUEST"
    }
}

export const getIncomeSuccess = (data) => {
    return {
        type: "GET_INCOME_SUCCESS",
        payload: data
    }
}

export const getIncomeFail = (payload) => {
    return {
        type: "GET_INCOME_FAIL",
        payload
    }
}

export const getIncome = (id) => {
    return (dispatch) => {
        dispatch(getIncomeRequest())
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/transaction/income/${id}`,
            }).then((res) => {
                const data = res.data?.data[0]
                dispatch(getIncomeSuccess(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getIncomeFail(message))
            })
    }
}