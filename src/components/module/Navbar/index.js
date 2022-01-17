/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import pict from '../../../assets/img/Group 31.svg'
import bell from '../../../assets/img/bell.svg'
import { userContext } from '../../../context/UserContext'

const Navbar = () => {
    // const user = JSON.parse(localStorage.getItem('user'))
    const {user, setUser} = useContext(userContext)
    return (
        <div className='header d-flex justify-content-between p-5 mx-3 d-none d-md-flex'>
            <div class="d-none d-md-block brand text-primary fw-bold">Zwallet</div>
            <div class="navbar">
                <img src={pict} alt="" />
                <div class="user-info mx-3">
                    <div class="fw-bold">{user.username}</div>
                    <span>+62 8139 3877 7946</span>
                </div>
                <img src={bell} alt="" />
            </div>
        </div>
    )
}

export default Navbar
