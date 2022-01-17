/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import grid from '../../../assets/img/grid.svg'
import arrow from '../../../assets/img/arrow-up.svg'
import plus from '../../../assets/img/plus.svg'
import user from '../../../assets/img/user.svg'
import logout from '../../../assets/img/log-out.svg'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }
    const handleProfile = () => {
        navigate('/profile')
    }
    const handleHome = () => {
        navigate('/')
    }
    const handleTransfer = () => {
        navigate('/transfer')
    }
    return (
        <div className='d-none d-md-flex flex-column justify-content-between p-3 sidebar me-3 shadow-sm rounded'>
            <div class="menu">
                <div class="my-4">
                    <a href="" class="icon mb-4 text-dark text-decoration-none" onClick={handleHome}>
                        <img src={grid} alt="" />
                        <span class="ms-3">Dashboard</span>
                    </a>
                </div>
                <div class="my-4">
                    <a href="" class="icon text-dark text-decoration-none" onClick={handleTransfer}>
                        <img src={arrow} alt="" />
                        <span class="ms-3">Transfer</span>
                    </a>
                </div>
                <div class="my-4">
                    <a href="" class="icon text-dark my-4 text-decoration-none">
                        <img src={plus} alt="" />
                        <span class="ms-3">Top Up</span>
                    </a>
                </div>
                <div class="my-4">
                    <a href="" class="icon text-dark text-decoration-none" onClick={handleProfile}>
                        <img src={user} alt="" />
                        <span class="ms-3">Profile</span>
                    </a>
                </div>
            </div>
            <div class="logout">
                <a href="" class="text-dark text-decoration-none" onClick={handleLogout}>
                    <img src={logout} alt="" />
                    <span class="ms-3">Log Out</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
