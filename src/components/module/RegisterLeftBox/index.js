import React from 'react'
import image from '../../../assets/img/Group 57.svg'

const RegisterLayout = () => {
    return (
        <div className="col left bg-primary px-5 d-none d-md-block">
            <h3 class="text-white mt-4 fw-bold">Zwallet</h3>
            <img src={image} alt=""/>
                <h2 class="text-white fw-bold">App that Covering Banking Needs.</h2>
                <p class="text-white w-75 mt-3 fw-lighter">Zwallet is an application that focussing in banking needs for all users
                    in the world. Always updated and always following world trends.
                    5000+ users registered in Zwallet everyday with worldwide
                    users coverage.
                </p>
        </div>
    )
}

export default RegisterLayout

