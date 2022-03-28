import axios from 'axios'

const token = localStorage.getItem('token')

export const getUsersRequest = () => {
    return {
        type: 'GET_USERS_REQUEST'
    }
}

export const getUsersSuccess = (data) => {
    return {
        type: 'GET_USERS_SUCCESS',
        payload: data
    }
}

export const getUsersFail = (error) => {
    return {
        type: 'GET_USERS_FAIL',
        payload: error
    }
}

export const getUsers = (querySearch) => {
    return (dispatch) => {
        dispatch(getUsersRequest())
        if(querySearch) {
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/users?username=${querySearch}`,
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => {
                const data = res.data?.data
                console.log(data);
                dispatch(getUsersSuccess(data))
            }).catch((err)=> {
                const message = err.response.message
                dispatch(getUsersFail(message))
            })
        } else {
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/users`,
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => {
                const data = res.data?.data
                dispatch(getUsersSuccess(data))
            }).catch((err)=> {
                const message = err.response.message
                dispatch(getUsersFail(message))
            })
        }
    }
}