import axios from 'axios'

export const getDetailsRequest = () => {
    return {
        type: 'GET_DETAILS_REQUEST'
    }
}

export const getDetailsSuccess = (data) => {
    return {
        type: 'GET_DETAILS_SUCCESS',
        payload: data
    }
}

export const getDetailsFail = (error) => {
    return {
        type: 'GET_DETAILS_FAIL',
        payload: error
    }
}

export const getDetails = (id) => {
    return (dispatch) => {
        dispatch(getDetailsRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${id}`
        }).then((res) => {
            const data = res.data?.data[0]
            dispatch(getDetailsSuccess(data))
            console.log(data);
            localStorage.setItem('wallet', JSON.stringify(data))
        }).catch((err)=> {
            const message = err.response.message
            dispatch(getDetailsFail(message))
        })
    }
}