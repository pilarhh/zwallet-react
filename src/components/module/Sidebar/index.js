/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import grid from '../../../assets/img/grid.svg'
import arrow from '../../../assets/img/arrow-up.svg'
import plus from '../../../assets/img/plus.svg'
import users from '../../../assets/img/user.svg'
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
    const user = JSON.parse(localStorage.getItem('user'))
    const handleTopup = () => {
        navigate(`/topup/${user.id}`)
    }
    return (
        <div className='d-none d-md-flex flex-column justify-content-between p-3 sidebar me-3 shadow-sm rounded my-3 bg-white'>
            <div class="">
                <div class="my-4 menu">
                    <a href="" class="icon mb-4 text-dark text-decoration-none" onClick={handleHome}>
                        <img src={grid} alt="" />
                        <span class="ms-3">Dashboard</span>
                    </a>
                </div>
                <div class="my-4 menu">
                    <a href="" class="icon text-dark text-decoration-none" onClick={handleTransfer}>
                        <img src={arrow} alt="" />
                        <span class="ms-3">Transfer</span>
                    </a>
                </div>
                <div class="my-4 menu">
                    <a href="" class="icon text-dark my-4 text-decoration-none" onClick={handleTopup}>
                        <img src={plus} alt="" />
                        <span class="ms-3">Top Up</span>
                    </a>
                </div>
                <div class="my-4 menu">
                    <a href="" class="icon text-decoration-none" onClick={handleProfile}>
                        <img src={users} alt="" />
                        <span class="ms-3">Profile</span>
                    </a>
                </div>
            </div>
            <div class="">
                <a href="" class="text-decoration-none icon" onClick={handleLogout}>
                    <img src={logout} alt="" />
                    <span class="ms-3">Log Out</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
