/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import samuel from '../../assets/img/samuel1.png'
import Button from "../../components/base/Button"
import { useNavigate, useParams } from 'react-router-dom'
import { postTransfer } from '../../redux/actions/transfer'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailWallet } from '../../redux/actions/walletDetail'
import { getDetails } from '../../redux/actions/userDetail'
import socket from '../../helpers/socket'

const TransferConfirmation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('user'))
    const transfer = JSON.parse(localStorage.getItem('transfer'))
    const idWallet = transfer.id_receiver
    const id = user.id

    const [form, setForm] = useState({
        id_receiver: idWallet,
        amount: transfer.amount,
        notes: transfer.notes,
        date: new Date()
    })

    const handleContinue = () => {
        dispatch(postTransfer({navigate, form, id}))
        socket.emit('sendTransfer', form)
    }

    const balance = useSelector((state) => state.UserDetail)

    useEffect(() => {
        dispatch(getDetails(id))
    }, [])

    const dataWallet = useSelector((state) => state.WalletDetail)

    useEffect(() => {
        dispatch(getDetailWallet(idWallet))
    }, [])

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded my-3">
                        <section class="p-1">
                            <h4 class="fw-bold fs-5 ms-2 mt-4">Transfer To</h4>
                            <figure class="d-flex ms-3 mt-3 shadow-sm p-2">
                                <img className='rounded-3' src={dataWallet.data.profile_picture} alt="" height='65' width='65'/>
                                <figcaption class="ms-3 lh-lg fw-bolder">
                                    {dataWallet.data.username} <br></br> {dataWallet.data.phone_number}
                                </figcaption>
                            </figure>
                            <section>
                                <h4 class="fw-bold fs-5 ms-2 mt-4">Details</h4>
                                <div class="ms-2 mt-4">
                                    <div class="ms-3 mt-2">
                                        Amount
                                    </div>
                                    <div class="fw-bold ms-3 mt-2">
                                        Rp{transfer.amount}
                                    </div>
                                </div>
                                <div class="ms-2 mt-4">
                                    <div class="ms-3 mt-2">
                                        Balance Left
                                    </div>
                                    <div class="fw-bold ms-3 mt-2">
                                        Rp{balance?.data.balance}
                                    </div>
                                </div>
                                <div class="ms-2 mt-4">
                                    <div class="ms-3 mt-2">
                                        Date & Time
                                    </div>
                                    <div class="fw-bold ms-3 mt-2">
                                        {transfer.date}
                                    </div>
                                </div>
                                <div class="ms-2 mt-4">
                                    <div class="ms-3 mt-2">
                                        Notes
                                    </div>
                                    <div class="fw-bold ms-3 mt-2">
                                        {transfer.notes}
                                    </div>
                                </div>
                                <Button class="btn btn-primary text-white mt-3 p-2 float-end border-0 d-none d-md-block mb-3 me-3" onClick={handleContinue}>
                                    Continue
                                </Button>
                            </section>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default TransferConfirmation
