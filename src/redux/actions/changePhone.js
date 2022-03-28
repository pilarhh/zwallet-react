import axios from 'axios'

export const putPhoneRequest = () => {
    return {
        type: 'PUT_PHONE_REQUEST'
    }
}

export const putPhoneSuccess = (data) => {
    return {
        type: 'PUT_PHONE_SUCCESS',
        payload: data
    }
}

export const putPhoneFail = (error) => {
    return {
        type: 'PUT_PHONE_FAIL',
        payload: error
    }
}

export const changePhone = ({navigate, phone, id}) => {
    return (dispatch) => {
        dispatch(putPhoneRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/changephone/${id}`,
            data: {phone_number: phone}
        }).then((res) => {
            const data = res.data?.data
            dispatch(putPhoneSuccess(data))
            navigate('/profile')
        }).catch((err)=> {
            const message = err.response.message
            dispatch(putPhoneFail(message))
        })
    }
}