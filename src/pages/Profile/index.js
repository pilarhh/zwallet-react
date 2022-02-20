/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
// import Button from "../../components/base/Button"
import pict from '../../assets/img/Group 31.svg'
import pen from '../../assets/img/edit-2.svg'
import arrow from '../../assets/img/arrow-profile.svg'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import { userContext } from '../../context/UserContext'

const Profile = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }
    const handlePin = () => {
        navigate('/changepin')
    }
    const {user, setUser} = useContext(userContext)
    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded">
                        <section className="d-flex flex-column justify-content-center align-items-center">
                            <div className="">
                                <img src={pict} className="user-pic mt-3" height="76px" alt="" />
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center ">
                                <img src={pen} alt="" />
                                <p className="text-secondary my-3 mx-2">Edit</p>
                            </div>

                            <div className="d-flex flex-column align-items-center">
                                <p className="fw-bold">{user.username}</p>
                                <p className="text-secondary">{user.phone_number}</p>
                            </div>

                            <div className="profile-box d-flex flex-row justify-content-between w-50">
                                <p className="profile-text fw-bold">Personal Information</p>
                                <img src={arrow} alt="" />
                            </div>
                            <div className="profile-box d-flex flex-row justify-content-between w-50">
                                <p className="profile-text fw-bold">Change Password</p>
                                <img src={arrow} alt="" />
                            </div>
                            <div onClick={handlePin} className="profile-box d-flex flex-row justify-content-between w-50">
                                <p className="profile-text fw-bold">Change PIN</p>
                                <img src={arrow} alt="" />
                            </div>
                            <div
                                onClick={handleLogout}
                                className="profile-box d-flex flex-row justify-content-between w-50"
                            >
                                <p className="profile-text fw-bold">Log Out</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Profile
