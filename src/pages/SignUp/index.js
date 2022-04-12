/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import RegisterLeftBox from "../../components/module/RegisterLeftBox"
import '../../App.css'
import mail from '../../assets/img/mail.svg'
import lock from '../../assets/img/lock.svg'
import person from '../../assets/img/person.svg'
// import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { register } from "../../redux/actions/register"


const Login = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    // const data = useSelector((state) => state.Register)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        dispatch(register({navigate, form}))
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const enabled = form.email.length > 0 && form.password.length > 0

    return (
        <div className="row">
            <RegisterLeftBox />
            <div className="col px-5 bg-white">
                <h1 className="text-primary mt-4 d-md-none text-center p-5 fw-bold">Zwallet</h1>
                <h2 className="pt-5 w-75 d-none d-md-block fw-bold">Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users</h2>
                <p className="pt-3 w-75 fw-lighter d-none d-md-block">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                <h2 className="d-md-none text-center fw-bold">Sign Up</h2>
                <p className="d-md-none text-center fw-lighter">
                    Create your account to access Zwallet.
                </p>
                <div className="form mt-4">
                    <img src={person} alt="" />
                    <Input
                        className="mb-4 border-0 w-75 border-bottom ms-2"
                        onChange={handleChange}
                        name="username"
                        value={form.username}
                        type="text"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="form mt-3">
                    <img src={mail} alt="" />
                    <Input
                        className="mb-4 border-0 w-75 border-bottom ms-2"
                        onChange={handleChange}
                        name="email"
                        value={form.email}
                        type="email"
                        placeholder="Enter your e-mail"
                    />
                </div>
                <div className="form mt-3">
                    <img src={lock} alt="" />
                    <Input
                        className="mb-4 border-0 w-75 border-bottom ms-2"
                        name="password"
                        onChange={handleChange}
                        value={form.password}
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>

                <p className="text-end text-dark me-5"><a href="" className="text-dark text-decoration-none me-5">Forgot Password?</a></p>
                <Button isLoading={loading} onClick={handleClick} disabled={!enabled} className="btn btn-light w-75 mt-5 rounded-3 ms-4">
                    Sign Up
                </Button>
                <p className="text-center mt-4 me-5">Already have an account? Let's <a href="" onClick={handleLogin} className="text-decoration-none">Log in</a></p>
            </div>
        </div>
    )
}

export default Login;