/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import RegisterLayout from "../../components/module/RegisterLeftBox/index"
import '../../App.css'
import mail from '../../assets/img/mail.svg'
import lock from '../../assets/img/lock.svg'
import axios from "axios"


const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        setLoading(true)
        axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/login`,
            {
                email: form.email,
                password: form.password
            })
            .then((res) => {

                setLoading(false)
                const result = res.data.data
                console.log(result);
                localStorage.setItem('auth', "1")
                localStorage.setItem('user', JSON.stringify(result))
                navigate('/')
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.response);
            })
        // if (form.email === 'pilarh@gmail.com' && form.password === "ppppp") {
        //     const profile = {
        //         name: 'Pilar H',
        //         email: form.email
        //     }
        //     navigate('/')
        //     localStorage.setItem('profile', JSON.stringify(profile))
        //     localStorage.setItem('auth', "1")
        // } else {
        //     alert("your email or password is wrong")
        // }
    }

    const handleSignup = () => {
        navigate('/SignUp')
    }

    return (
        <div className="row">
            <RegisterLayout />
            <div className="col px-5">
                <h1 className="text-primary mt-4 d-md-none text-center p-5 fw-bold">Zwallet</h1>
                <h2 className="pt-5 w-75 d-none d-md-block fw-bold">Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users</h2>
                <p className="pt-3 w-75 fw-lighter d-none d-md-block">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                <h2 className="d-md-none text-center fw-bold">Login</h2>
                <p className="d-md-none text-center fw-lighter">
                    Login to your existing account to access<br />
                    all the features in Zwallet.
                </p>
                <div className="form mt-4">
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

                <p className="text-end mt-3 text-dark"><a href="" className="text-dark text-decoration-none">Forgot Password?</a></p>
                <Button isLoading={loading} onClick={handleClick} className="btn btn-light w-100 mt-5">
                    Login
                </Button>
                <p className="text-center mt-4">Don’t have an account? Let's <a href="" onClick={handleSignup} className="text-decoration-none">Sign up</a></p>
            </div>
        </div>
    )
}

export default Login;