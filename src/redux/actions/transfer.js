import axios from 'axios'

export const transferRequest = () => {
    return {
        type: 'TRANSFER_REQUEST'
    }
}

export const transferSuccess = (data) => {
    return {
        type: 'TRANSFER_SUCCESS',
        payload: data
    }
}

export const transferFail = (error) => {
    return {
        type: 'TRANSFER_FAIL',
        payload: error
    }
}

export const postTransfer = ({ form, navigate, id }) => {
    return (dispatch) => {
        dispatch(transferRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/transaction/${id}`,
            data: {
                id_receiver: form.id_receiver,
                amount: form.amount,
                notes: form.notes
            }
        }).then((res) => {
            const data = res.data?.data
            dispatch(transferSuccess(data))
            navigate('/transfer/success')
        }).catch((err) => {
            const message = err.message
            dispatch(transferFail(message))
            navigate('/transfer/failed')
        })
    }
}