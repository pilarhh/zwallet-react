import React from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import { useNavigate } from 'react-router-dom'

const PhoneNumber = () => {
    const navigate = useNavigate()
    const handleContinue = () => {
        navigate('')
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
                                <div class="form">
                                    
                                    <Input class="border-0 border-bottom w-50 ms-2" type="number" placeholder=""></Input>
                                </div>
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
