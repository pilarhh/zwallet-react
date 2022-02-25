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

    return (
        <div class="col mt-3">
            {data?.data.map((item) => {
                return (
                    <figure class="d-flex justify-content-between">
                        <div class="img-caption d-flex">
                            <img class="samuel-icon" src={samuel} alt="" />
                            <figcaption class="ms-4 lh-lg">
                                Samuel <br></br>{item.type}
                            </figcaption>
                        </div>
                        <figcaption class="text-success fw-bold">{item.amount}</figcaption>
                    </figure>
                )
            })}
        </div>
    )
}

export default TransactionHistory
