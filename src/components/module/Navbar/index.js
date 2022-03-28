/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import pict from '../../../assets/img/Group 31.svg'
import bell from '../../../assets/img/bell.svg'
import arrowGreen from '../../../assets/img/arrow-down-green.svg'
import arrowRed from '../../../assets/img/arrow-up-red.svg'
import { userContext } from '../../../context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../../redux/actions/userDetail'
import { getHistory } from '../../../redux/actions/history'
import socket from '../../../helpers/socket'
import './modal.css'

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const id = user.id

    const dispatch = useDispatch()
    const data = useSelector((state) => state.UserDetail)

    useEffect(() => {
        dispatch(getDetails(user.id))
    }, [])

    const dataHistory = useSelector((state) => state.History)

    useEffect(() => {
        dispatch(getHistory())
    }, [])

    const [transferInfo, setTransferInfo] = useState([]);
    const [modal, setModal] = useState(false)

    const openModal = () => {
        if (modal === false) {
            setModal(true)
        } else {
            setModal(false)
        }
    }

    socket.on('sendTransfer', (data) => {
        setTransferInfo(transferInfo.concat(data))
    })

    const pic = (type) => {
        if (type === 'Top up') {
            return require('../../../assets/img/arrow-down-green.svg').default
        } else {
            return require('../../../assets/img/arrow-up-red.svg').default
        }
    }
    
    return (
        <div className='header d-flex justify-content-between p-4 d-none d-md-flex shadow-sm bg-white'>
            <div class="d-none d-md-block brand text-primary fw-bold mt-3 ms-5">Zwallet</div>
            <div class="navbar me-5">
                <img className='rounded-3' src={data?.data.profile_picture} alt="" height='60'width='60'/>
                <div class="user-info mx-3">
                    <div class="fw-bold">{data?.data.username}</div>
                    <span>{data?.data.phone_number}</span>
                </div>
                <img className='contacts' src={bell} alt="" onClick={() => openModal()}/>
            </div>
            {modal === true ? (
                <div className="w-25 bg-white shadow modals p-4 rounded">
                    <div className="h6 text-secondary">Today</div>
                    {dataHistory?.data.map((item) => (
                        <div className="d-flex shadow-sm p-1 my-3">
                            <img className='mx-2' src={pic(item.type)} alt="" />
                            <div className="d-flex flex-column ms-4 lh-lg">
                                <div className="text-secondary">{item.type}</div>
                                <div className="fw-bolder">Rp{item.amount}</div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : ('')}
        </div>
    )
}

export default Navbar
