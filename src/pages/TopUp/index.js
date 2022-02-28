/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { topUp } from '../../redux/actions/topUp'
import { getDetailWallet } from '../../redux/actions/walletDetail'

const TopUp = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        id_sender: id,
        amount: '',
        date: new Date()
    })
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleContinue = () => {
        dispatch(topUp({navigate, form, id}))
    }
    
    const user = JSON.parse(localStorage.getItem('user'))
    const balance = useSelector((state) => state.WalletDetail)
  
    useEffect(() => {
      dispatch(getDetailWallet(user.id))
    }, [])

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded my-3">
                        <section class="p-3 ms-2">
                            <h4 class="d-none d-md-block fw-bold">Top Up</h4>
                            <p class="fw-lighter mt-4">
                                Type the amount you want to top up and then <br></br>
                                press continue to the next steps.
                            </p>
                            <div class="mt-4 text-center">
                                <Input class="border-0 text-center fs-2" type="number" placeholder="0.00" name="amount" value={form.amount} onChange={handleChange}></Input>
                                <p class="fw-bold my-4">Balance: Rp{balance?.data.balance}</p>
                            </div>
                            <Button class="btn btn-primary text-white mt-3 p-2 border-0 float-end d-none d-md-block mb-3" onClick={handleContinue}>
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

export default TopUp
