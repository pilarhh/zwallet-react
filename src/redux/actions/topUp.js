import axios from 'axios'

export const topUpRequest = () => {
    return {
        type: 'TOPUP_REQUEST'
    }
}

export const topUpSuccess = (data) => {
    return {
        type: 'TOPUP_SUCCESS',
        payload: data
    }
}

export const topUpFail = (error) => {
    return {
        type: 'TOPUP_FAIL',
        payload: error
    }
}

export const topUp = ({ form, navigate, id }) => {
    return (dispatch) => {
        dispatch(topUpRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/wallets/topup/${id}`,
            data: {
                amount: form.amount
            }
        }).then((res) => {
            const data = res.data?.data
            dispatch(topUpSuccess(data))
            navigate('/')
        }).catch((err) => {
            const message = err.message
            dispatch(topUpFail(message))
        })
    }
}