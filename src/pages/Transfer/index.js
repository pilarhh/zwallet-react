/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext} from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import search from '../../assets/img/search.svg'
import samuel from '../../assets/img/samuel1.png'
import momo from '../../assets/img/3.svg'
import jessica from '../../assets/img/4.svg'
import michael from '../../assets/img/8.svg'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../context/UserContext'


const Transfer = () => {
    const navigate = useNavigate()
    const {user, setUser} = useContext(userContext)
    const handleClick = () => {
        navigate(`./input/${user.id}`)
    }
    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded">
                        <section class="p-3 ms-2">
                            <h4 class="d-none d-md-block fw-bold">Search Receiver</h4>
                            <form class="rounded bg-light p-3 mt-4">
                                <img src={search} alt="" />
                                <Input class="w-75 border-0 ms-3 fw-lighter bg-light" type="text" placeholder="Search Receiver Here"></Input>
                            </form>
                            <div class="history-list mt-2">
                                <a href="" class="d-flex text-decoration-none text-dark" onClick={handleClick}>
                                    <img class="samuel-icon" src={samuel} alt="" />
                                    <figcaption class="1h-lg ms-4">
                                        Samuel Suhi <br></br> +62 813-8492-9994
                                    </figcaption>
                                </a>
                                <figure class="d-flex mt-2">
                                    <img class="momo-icon" src={momo} alt="" />
                                    <figcaption class="1h-lg ms-4">
                                        Momo Taro <br></br> +62 812-4343-6731
                                    </figcaption>
                                </figure>
                                <figure class="d-flex">
                                    <img class="jessica-icon" src={jessica} alt="" />
                                    <figcaption class="1h-lg ms-4">
                                        Jessica Keen <br></br> +62 811-3452-5252
                                    </figcaption>
                                </figure>
                                <figure class="d-flex">
                                    <img class="michael-icon" src={michael} alt="" />
                                    <figcaption class="1h-base ms-4">
                                        Michael Le <br></br> +62 810-4224-4613
                                    </figcaption>
                                </figure>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Transfer
