import axios from 'axios'

export const loginRequest = () => {
    return {
        type: 'LOGIN_REQUEST'
    }
}

export const loginSuccess = (data) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}

export const loginFail = (error) => {
    return {
        type: 'LOGIN_FAIL',
        payload: error
    }
}

export const login = ({ form, navigate }) => {
    return (dispatch) => {
        dispatch(loginRequest())
        return axios({
            method: 'POST',
            url: `http://localhost:4000/users/login`,
            data: {
                email: form.email,
                password: form.password
            }
        }).then((res) => {
            const data = res.data?.data
            dispatch(loginSuccess(data))
            localStorage.setItem('auth', "1")
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/')
        }).catch((err) => {
            const message = err.response
            dispatch(loginFail(message))
            console.log(message);
        })
    }
}