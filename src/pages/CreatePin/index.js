/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import Button from "../../components/base/Button"
import RegisterLayout from "../../components/module/RegisterLeftBox/index"
import '../../App.css'
import PinInput from "react-pin-input";
import axios from 'axios'
import { userContext } from '../../context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { changePin } from '../../redux/actions/changePin'

const CreatePin = () => {
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
        navigate('/login')
    }

    return (
        <div className="row">
            <RegisterLayout />
            <div className="col px-5">
                <h1 className="text-primary mt-4 d-md-none text-center p-5 fw-bold">Zwallet</h1>
                <h2 className="pt-5 w-75 d-none d-md-block fw-bold">Secure Your Account, Your Wallet,
                    and Your Data With 6 Digits PIN
                    That You Created Yourself.</h2>
                <p className="pt-3 w-75 fw-lighter d-none d-md-block">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
                <h2 className="d-md-none text-center fw-bold">Create Security PIN</h2>
                <p className="d-md-none text-center fw-lighter">
                    Create a PIN that’s contain 6 digits number for<br />
                    security purpose in Zwallet.
                </p>
                <PinInput
                    length={6}
                    initialValue=""
                    onChange={handleChange}
                    type="numeric"
                    inputMode="number"
                    style={{ width: '80%' }}
                    inputStyle={{ borderColor: 'red' }}
                    inputFocusStyle={{ borderColor: 'blue' }}
                    onComplete={(value, index) => { }}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                <Button onClick={handleContinue} className="btn btn-light w-100 mt-5">
                    Confirm
                </Button>
            </div>
        </div>
    )
}

export default CreatePin
