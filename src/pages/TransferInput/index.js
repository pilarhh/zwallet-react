/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import samuel from '../../assets/img/samuel1.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../redux/actions/userDetail'

const TransferInput = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [form, setForm] = useState({
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
        localStorage.setItem('transfer', JSON.stringify(form))
    }

    const dispatch = useDispatch()
    const dataWallet = useSelector((state) => state.UserDetail)

    useEffect(() => {
        dispatch(getDetails(id))
    }, [])

    // const wallet = JSON.parse(localStorage.getItem('wallet'))

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded">
                        <section class="p-3 ms-2">
                            <h4 class="d-none d-md-block fw-bold">Transfer Money</h4>
                            <div class="history-list mt-4">
                                <figure class="d-flex">
                                    <img class="samuel-icon" src={samuel} alt="" />
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
                                <Input class="border-0 text-center fs-2" type="number" placeholder="0.00" onchange={handleChange}></Input>
                                <p class="fw-bold my-4">Rp{dataWallet.data.balance} Available</p>
                                <div class="form">
                                    <img src="./img/pencil.svg" alt="" />
                                    <Input class="border-0 border-bottom w-50 ms-2" type="text" placeholder="Add some notes" onchange={handleChange}></Input>
                                </div>
                            </div>
                            <Button class="btn btn-primary text-white mt-3 p-2 border-0 float-end d-none d-md-block" onClick={handleContinue}>
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
