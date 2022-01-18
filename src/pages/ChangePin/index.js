/* eslint-disable no-unused-vars */
import React, { useState, useContext} from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Button from "../../components/base/Button"
import { useNavigate } from 'react-router-dom'
import PinInput from 'react-pin-input'
import "../../App.css"
import { userContext } from '../../context/UserContext'
import axios from 'axios'

const PhoneNumber = () => {
    const [form, setForm] = useState({
        pin: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.pin]: e.target.form.pin,
        });
    };
    const { user, setUser } = useContext(userContext)
    const navigate = useNavigate()
    const handleContinue = () => {
        axios.put(`${process.env.REACT_APP_URL_BACKEND}/users/changepin/${user.id}`, {
            pin: form.pin
        }).then((res) => {
            const result = res.data
            console.log(result)
            navigate('/profile')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded">
                        <section class="p-3 ms-2">
                            <h4 class="d-none d-md-block fw-bold">Change Pin</h4>
                            <p class="fw-lighter mt-4">
                                Enter your current 6 digits Zwallet PIN below to <br></br>
                                continue to the next steps.
                            </p>
                            <div class="my-5 mb-5 text-center">
                                <PinInput
                                    length={6}
                                    initialValue=""
                                    type="numeric"
                                    inputMode="number"
                                    onChange={handleChange}
                                    style={{ width: '50%', marginLeft: '25%' }}
                                    inputStyle={{ borderColor: 'red' }}
                                    inputFocusStyle={{ borderColor: 'blue' }}
                                    onComplete={(value, index) => { }}
                                    autoSelect={true}
                                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                />
                                <Button class="btn btn-light mt-3 p-2 border-0 w-50 mt-5 text-secondary" onClick={handleContinue}>
                                    Continue
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

export default PhoneNumber
