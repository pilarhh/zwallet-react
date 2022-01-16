import React from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import phone from '../../assets/img/Vector.svg'
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
                            <h4 class="d-none d-md-block fw-bold">Add Phone Number</h4>
                            <p class="fw-lighter mt-4">
                                Add at least one phone number for the transfer <br></br>
                                ID so you can start transfering your money to <br></br>
                                another user.
                            </p>
                            <div class="my-5 mb-5 text-center">
                                <div class="form">
                                    <img src={phone} alt="" />
                                    <span className='mx-2'>+62</span>
                                    <Input class="border-0 border-bottom w-50 ms-2" type="number" placeholder="Enter your phone number"></Input>
                                </div>
                                <Button class="btn btn-light mt-3 p-2 border-0 w-75 mt-5 text-secondary" onClick={handleContinue}>
                                    Add Phone Number
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
