import React from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import trash from '../../assets/img/trash.svg'
import { useNavigate } from 'react-router-dom'

const PhoneNumber = () => {
    const navigate = useNavigate()
    navigate()

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded my-3">
                        <section class="p-3 ms-2">
                            <h4 class="d-none d-md-block fw-bold">Manage Phone Number</h4>
                            <p class="fw-lighter mt-4">
                                You can only delete the phone number and then <br></br>
                                you must add another phone number.
                            </p>
                            <div class="my-5 mb-5 ">
                                <p className='fw-light'>Primary</p>
                                <p>+62 813 9387 7946</p>
                                <img src={trash} alt='' className='float-end'></img>
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
