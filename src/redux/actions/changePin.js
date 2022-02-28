import axios from 'axios'

export const putPinRequest = () => {
    return {
        type: 'PUT_PIN_REQUEST'
    }
}

export const putPinSuccess = (data) => {
    return {
        type: 'PUT_PIN_SUCCESS',
        payload: data
    }
}

export const putPinFail = (error) => {
    return {
        type: 'PUT_PIN_FAIL',
        payload: error
    }
}

export const changePin = ({form, id}) => {
    return (dispatch) => {
        dispatch(putPinRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/changepin/${id}`,
            data: {pin: form}
        }).then((res) => {
            const data = res.data?.data
            dispatch(putPinSuccess(data))
            console.log(data);
        }).catch((err)=> {
            const message = err.message
            dispatch(putPinFail(message))
        })
    }
}