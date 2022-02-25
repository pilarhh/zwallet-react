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


const TransferConfirmation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const balance = useSelector((state) => state.WalletDetail)
  
    useEffect(() => {
      dispatch(getDetailWallet(user.id))
    }, [])

    const user = JSON.parse(localStorage.getItem('user'))
    const wallet = JSON.parse(localStorage.getItem('wallet'))
    const transfer = JSON.parse(localStorage.getItem('transfer'))
    const id = transfer.id_sender

    const [form, setForm] = useState({
        id_receiver: transfer.id_receiver,
        amount: transfer.amount,
        notes: transfer.notes,
        date: new Date()
    })

    const handleContinue = () => {
        dispatch(postTransfer({navigate, form, id}))
    }

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded">
                        <section class="p-1">
                            <h4 class="fw-bold fs-5 ms-2 mt-4">Transfer To</h4>
                            <figure class="d-flex ms-3 mt-3">
                                <img src={samuel} alt="" />
                                <figcaption class="ms-3 lh-lg fw-bolder">
                                    {wallet.username} <br></br> {wallet.phone_number}
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
                                <Button class="btn btn-primary text-white mt-3 p-2 float-end border-0 d-none d-md-block" onClick={handleContinue}>
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
