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
import { useDispatch, useSelector } from 'react-redux'
import { changePin } from '../../redux/actions/changePin'

const ChangePin = () => {
    const [form, setForm] = useState(0)
    const handleChange = (form) => {
        setForm(form)
        console.log(form);
    };
    const { user, setUser } = useContext(userContext)
    const id = user.id
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const data = useSelector((state) => state.ChangePin)

    const handleContinue = () => {
        dispatch(changePin({form, id}))
        navigate('/profile')
    }

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded my-3">
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
                                    name="pin"
                                    value={form.pin}
                                />
                                <Button class="btn btn-light mt-3 p-2 border-0 w-50 mt-5" onClick={handleContinue}>
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

export default ChangePin
