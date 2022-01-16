import React from 'react'
import { useNavigate } from "react-router-dom"
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import RegisterLayout from "../../components/module/RegisterLeftBox/index"
import '../../App.css'

const CreatePin = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate()
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
                <Input></Input>
                <Button onClick={handleClick} className="btn btn-light w-100 mt-5">
                    Confirm
                </Button>
            </div>
        </div>
    )
}

export default CreatePin
