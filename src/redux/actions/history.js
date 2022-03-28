import axios from 'axios'

export const getHistoryRequest = () => {
    return {
        type: 'GET_HISTORY_REQUEST'
    }
}

export const getHistorySuccess = (data) => {
    return {
        type: 'GET_HISTORY_SUCCESS',
        payload: data
    }
}

export const getHistoryFail = (error) => {
    return {
        type: 'GET_HISTORY_FAIL',
        payload: error
    }
}

export const getHistory = (id) => {
    return (dispatch) => {
        dispatch(getHistoryRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/transaction/${id}`
        }).then((res) => {
            const data = res.data?.data
            dispatch(getHistorySuccess(data))
            console.log(data);
        }).catch((err)=> {
            const message = err.response.message
            dispatch(getHistoryFail(message))
        })
    }
}