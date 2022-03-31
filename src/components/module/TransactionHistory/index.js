/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { getHistory } from '../../../redux/actions/history'
import { useDispatch, useSelector } from 'react-redux'

const TransactionHistory = () => {
    const data = useSelector((state) => state.History)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const id = user.id

    useEffect(() => {
        dispatch(getHistory(id))
    }, [])

    const colors = (type) => {
        if (type === "Transfer") return 'red'
        else return 'green'
    }

    const detail = (type) => {
        if (type === "Transfer") return '-'
        else return '+'
    }

    return (
        <div class="col mt-3">
            {data?.data.map((item) => {
                return (
                    <figure class="d-flex justify-content-between">
                        <div class="img-caption d-flex">
                            <img class="rounded-3" src={item.receiver_pic} alt="" height='65' width='65' />
                            <figcaption class="ms-4 lh-lg ">
                                {item.receiver} <br></br><span className='fw-bolder'>{item.type}</span>
                            </figcaption>
                        </div>
                        <figcaption class="fw-bold mt-3" style={{ color: colors(item.type) }}>{detail(item.type) ? detail(item.type) : item.amount}Rp{item.amount}</figcaption>
                    </figure>
                )
            })}
        </div>
    )
}

export default TransactionHistory
