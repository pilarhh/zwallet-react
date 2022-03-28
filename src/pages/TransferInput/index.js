/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import samuel from '../../assets/img/samuel1.png'
import pencil from '../../assets/img/pencil.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../redux/actions/userDetail'
import { getDetailWallet } from '../../redux/actions/walletDetail'

const TransferInput = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const idSender = user.id

    const [form, setForm] = useState({
        id_sender: idSender,
        id_receiver: id,
        amount: '',
        notes: '',
        date: new Date()
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleContinue = () => {
        navigate('/transfer/confirmation')
        setForm(form)
        console.log(form)
        localStorage.setItem('transfer', JSON.stringify(form))
    }

    const dispatch = useDispatch()
    const data = useSelector((state) => state.UserDetail)

    useEffect(() => {
        dispatch(getDetails(user.id))
    }, [])

    const dataWallet = useSelector((state) => state.WalletDetail)
  
    useEffect(() => {
      dispatch(getDetailWallet(id))
    }, [])

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded my-3">
                        <section class="p-3 ms-2">
                            <h4 class="d-none d-md-block fw-bold">Transfer Money</h4>
                            <div class="history-list mt-4">
                                <figure class="d-flex shadow-sm p-2">
                                    <img class="samuel-icon rounded-3" src={dataWallet.data.profile_picture} alt="" height='65' width='65'/>
                                    <figcaption class="lh-lg ms-4 fw-bolder">
                                        {dataWallet.data.username} <br></br> {dataWallet.data.phone_number}
                                    </figcaption>
                                </figure>
                            </div>
                            <p class="fw-lighter mt-4">
                                Type the amount you want to transfer and then <br></br>
                                press continue to the next steps.
                            </p>
                            <div class="mt-4 text-center">
                                <Input class="blue-focus border-0 text-center fs-2 amount fw-bolder" type="number" placeholder="0.00" name="amount" value={form.amount} onChange={handleChange}></Input>
                                <p class="fw-bold my-4">Rp{data?.data.balance} Available</p>
                                <div class="form">
                                    <img src={pencil} alt="" />
                                    <Input class="blue-focus border-0 border-bottom w-50 ms-2" type="text" placeholder="Add some notes" name="notes" value={form.notes} onChange={handleChange}></Input>
                                </div>
                            </div>
                            <Button class="btn btn-primary text-white mt-3 p-2 border-0 float-end d-none d-md-block mb-3 me-2" onClick={handleContinue}>
                                Continue
                            </Button>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default TransferInput
