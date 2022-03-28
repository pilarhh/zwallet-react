import axios from 'axios'

export const registerRequest = () => {
    return {
        type: 'REGISTER_REQUEST'
    }
}

export const registerSuccess = (data) => {
    return {
        type: 'REGISTER_SUCCESS',
        payload: data
    }
}

export const registerFail = (error) => {
    return {
        type: 'REGISTER_FAIL',
        payload: error
    }
}

export const register = ({ form, navigate }) => {
    return (dispatch) => {
        dispatch(registerRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/register`,
            data: {
                username: form.username,
                email: form.email,
                password: form.password
            }
        }).then((res) => {
            const data = res.data?.data
            dispatch(registerSuccess(data))
            navigate('/createpin')
        }).catch((err) => {
            const message = err.message
            dispatch(registerFail(message))
        })
    }
}