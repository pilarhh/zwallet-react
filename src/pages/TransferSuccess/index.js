import React from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Button from "../../components/base/Button"
import samuel from '../../assets/img/samuel1.png'
import success from '../../assets/img/success.svg'
import share from '../../assets/img/share-2.svg'
import download from '../../assets/img/download-blue.svg'
import { useNavigate } from 'react-router-dom'

const TransferInput = () => {
    const navigate = useNavigate()
    const handleContinue = () => {
        navigate('/home')
    }
    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded">
                        <section class="p-1">
                            <div class="top text-center">
                                <img src={success} alt="" />
                                <h4 class="mt-4 fw-bold">Transfer Success</h4>
                            </div>
                            <h4 class="fw-bold fs-5 ms-2 mt-4">Details</h4>
                            <div class="ms-2 mt-4">
                                <div class="ms-3 mt-2">
                                    Amount
                                </div>
                                <div class="fw-bold ms-3 mt-2">
                                    Rp 100.000
                                </div>
                            </div>
                            <div class="ms-2 mt-4">
                                <div class="ms-3 mt-2">
                                    Balance Left
                                </div>
                                <div class="fw-bold ms-3 mt-2">
                                    Rp 20.000
                                </div>
                            </div>
                            <div class="ms-2 mt-4">
                                <div class="ms-3 mt-2">
                                    Date & Time
                                </div>
                                <div class="fw-bold ms-3 mt-2">
                                    May 11, 2020 - 12.20
                                </div>
                            </div>
                            <div class="ms-2 mt-4">
                                <div class="ms-3 mt-2">
                                    Notes
                                </div>
                                <div class="fw-bold ms-3 mt-2">
                                    For buying some socks
                                </div>
                            </div>
                            <h4 class="fw-bold fs-5 ms-2 mt-4">Transfer To</h4>
                            <figure class="d-flex ms-3 mt-4">
                                <img src={samuel} alt="" />
                                <figcaption class="ms-3 1h-base">
                                    Samuel Suhi <br></br> +62 813-8492-9994
                                </figcaption>
                            </figure>
                            <div class="btn-desktop d-flex justify-content-end">
                                <Button class="btn btn-light border-0 d-none d-md-block">
                                    <img src={share} alt="" />
                                </Button>
                                <Button class="btn btn-light border-0 mx-3 d-none d-md-block">
                                    <img src={download} alt="" />
                                    <span class="text-primary ms-2">Download PDF</span>
                                </Button>
                                <Button class="btn btn-primary text-white mt-3 p-3 border-0 d-none d-md-block" onClick={handleContinue}>
                                    Back to Home
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

export default TransferInput
