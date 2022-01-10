import React from 'react'
import pict from '../../../assets/img/Group 31.svg'
import bell from '../../../assets/img/bell.svg'

const Header = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    return (
        <div className='header d-flex justify-content-between p-5 mx-3 d-none d-md-flex'>
            <div class="d-none d-md-block brand text-primary fw-bold">Zwallet</div>
            <div class="navbar">
                <img src={pict} alt="" />
                <div class="user-info mx-3">
                    <div class="fw-bold">{user.name}</div>
                    <span>+62 8139 3877 7946</span>
                </div>
                <img src={bell} alt="" />
            </div>
        </div>
    )
}

export default Header
