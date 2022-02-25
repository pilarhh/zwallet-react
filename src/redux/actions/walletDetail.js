import axios from 'axios'

export const getWalletDetailRequest = () => {
    return {
        type: 'WALLET_REQUEST'
    }
}

export const getWalletDetailSuccess = (data) => {
    return {
        type: 'WALLET_SUCCESS',
        payload: data
    }
}

export const getWalletDetailFail = (error) => {
    return {
        type: 'WALLET_FAIL',
        payload: error
    }
}

export const getDetailWallet = (id) => {
    return (dispatch) => {
        dispatch(getWalletDetailRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${id}`
        }).then((res) => {
            const data = res.data?.data[0]
            dispatch(getWalletDetailSuccess(data))
            console.log(data);
        }).catch((err)=> {
            const message = err.response.message
            dispatch(getWalletDetailFail(message))
        })
    }
}