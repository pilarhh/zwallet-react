/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useContext, useEffect} from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../redux/actions/userDetail'

const Profile = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    const handlePin = () => {
        navigate('/changepin')
    }

    const user = JSON.parse(localStorage.getItem('user'))

    const dispatch = useDispatch()
    const data = useSelector((state) => state.UserDetail)

    useEffect(() => {
        dispatch(getDetails(user.id))
    }, [])
    
    const handleEdit = () => {
        navigate('/profilepicture')
    }

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded my-3">
                        <section className="d-flex flex-column justify-content-center align-items-center">
                            <div className="">
                                <img src={data?.data.profile_picture} className="user-pic mt-3 rounded-3" height="76px" alt="" />
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center contacts" onClick={handleEdit}>
                                <img src={pen} alt="" height='13'/>
                                <p className="text-secondary mt-3 mx-2">Edit</p>
                            </div>

                            <div className="d-flex flex-column align-items-center">
                                <p className="fw-bold">{data?.data.username}</p>
                                <p className="text-secondary contacts" onClick={()=>navigate('/phonenumber')}>{data?.data.phone_number}</p>
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
