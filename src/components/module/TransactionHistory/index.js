/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import samuel from '../../../assets/img/samuel.svg'
import { getHistory } from '../../../redux/actions/history'
import { useDispatch, useSelector } from 'react-redux'

const TransactionHistory = () => {
    const data = useSelector((state) => state.History)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHistory())
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
                            <img class="" src={samuel} alt="" height='65' width='65' />
                            <figcaption class="ms-4 lh-lg fw-bolder">
                                user <br></br>{item.type}
                            </figcaption>
                        </div>
                        <figcaption class="fw-bold mt-3" style={{ color: colors(item.type) }}>{detail(item.type) ? detail(item.type) : item.amount}{item.amount}</figcaption>
                    </figure>
                )
            })}
        </div>
    )
}

export default TransactionHistory
