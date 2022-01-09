import React from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import samuel from '../../assets/img/samuel1.png'
import { useNavigate } from 'react-router-dom'

const TransferInput = () => {
    const navigate = useNavigate()
    const handleContinue = () => {
        navigate('/transfer/confirmation')
    }

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
                                    <figcaption class="1h-lg ms-4">
                                        Samuel Suhi <br></br> +62 813-8492-9994
                                    </figcaption>
                                </figure>
                            </div>
                            <p class="fw-lighter mt-4">
                                Type the amount you want to transfer and then <br></br>
                                press continue to the next steps.
                            </p>
                            <div class="mt-4 text-center">
                                <Input class="border-0 text-center fs-2" type="number" placeholder="0.00"></Input>
                                <p class="fw-bold my-4">Rp120.000 Available</p>
                                <div class="form">
                                    <img src="./img/pencil.svg" alt="" />
                                    <Input class="border-0 border-bottom w-50 ms-2" type="text" placeholder="Add some notes"></Input>
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
