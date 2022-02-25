import React from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Button from "../../components/base/Button"
import samuel from '../../assets/img/samuel1.png'
import failed from '../../assets/img/failed.svg'
import { useNavigate } from 'react-router-dom'

const TransferInput = () => {
    const navigate = useNavigate()
    const handleContinue = () => {
        navigate('/transfer')
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
                                <img src={failed} alt="" />
                                <h4 class="mt-4 fw-bold">Transfer Failed</h4>
                                <p class="fw-lighter mt-3">We can’t transfer your money at the moment, we recommend you to check your <br></br> internet connection and try again.</p>
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
                                <figcaption class="ms-3 lh-lg fw-bolder">
                                    Samuel Suhi <br></br> +62 813-8492-9994
                                </figcaption>
                            </figure>
                            <Button class="btn btn-primary text-white mt-3 p-2 float-end border-0 d-none d-md-block" onClick={handleContinue}>
                                Try again
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
