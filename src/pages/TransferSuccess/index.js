/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Button from "../../components/base/Button"
import samuel from '../../assets/img/samuel1.png'
import success from '../../assets/img/success.svg'
import share from '../../assets/img/share-2.svg'
import download from '../../assets/img/download-blue.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../redux/actions/userDetail'
import { getDetailWallet } from '../../redux/actions/walletDetail'

const TransferInput = () => {
    const navigate = useNavigate()
    const handleContinue = () => {
        navigate('/')
    }

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const transfer = JSON.parse(localStorage.getItem('transfer'))

    const balance = useSelector((state) => state.UserDetail)

    useEffect(() => {
        dispatch(getDetails(user.id))
    }, [])

    const dataWallet = useSelector((state) => state.WalletDetail)
  
    useEffect(() => {
      dispatch(getDetailWallet(transfer.id_receiver))
    }, [])

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded my-3">
                        <section class="p-1">
                            <div class="top text-center">
                                <img src={success} alt="" />
                                <h4 class="mt-4 fw-bold">Transfer Success</h4>
                            </div>
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
                            <h4 class="fw-bold fs-5 ms-2 mt-4">Transfer To</h4>
                            <figure class="d-flex ms-3 mt-4 shadow-sm p-2">
                                <img src={samuel} alt="" height='65'/>
                                <figcaption class="ms-3 lh-lg fw-bolder">
                                    {dataWallet?.data.username} <br></br> {dataWallet?.data.phone_number}
                                </figcaption>
                            </figure>
                            <div class="btn-desktop d-flex justify-content-end mb-2 ">
                                <Button class="btn btn-light border-0 d-none d-md-block">
                                    <img src={share} alt="" />
                                </Button>
                                <Button class="btn btn-light border-0 mx-3 d-none d-md-block">
                                    <img src={download} alt="" />
                                    <span class="text-primary ms-2">Download PDF</span>
                                </Button>
                                <Button class="btn btn-primary text-white p-3 border-0 d-none d-md-block" onClick={handleContinue}>
                                    Back to Home
                                </Button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default TransferInput
