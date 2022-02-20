/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import search from '../../assets/img/search.svg'
import samuel from '../../assets/img/samuel1.png'
import momo from '../../assets/img/3.svg'
import jessica from '../../assets/img/4.svg'
import michael from '../../assets/img/8.svg'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { userContext } from '../../context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/actions/users'


const Transfer = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(userContext)

    const dispatch = useDispatch()
    const data = useSelector((state) => state.User)
    const [searchParams, setSearchParams] = useSearchParams()
    const querySearch = searchParams.get('search')

    useEffect(() => {
        dispatch(getUsers(querySearch))
    }, [querySearch])

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setSearchParams({search: e.target.value})
        }
    }

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="d-flex flex-column content flex-fill shadow-sm rounded">
                        <section class="p-3 ms-2">
                            <h4 class="d-none d-md-block fw-bold">Search Receiver</h4>
                            <form class="rounded bg-light p-3 mt-4">
                                <img src={search} alt="" />
                                <Input class="w-75 border-0 ms-3 fw-lighter bg-light" type="text" placeholder="Search Receiver Here" onKeyUp={handleSearch}></Input>
                            </form>
                            <div className='mt-3'>
                                {data?.data.map((item) => {
                                    return (
                                        <figure class="d-flex text-decoration-none text-dark contacts" onClick={()=>navigate(`./input/${item.id}`)}>
                                            <img class="samuel-icon" src={samuel} alt="" />
                                            <figcaption class="lh-lg ms-4 fw-bolder">
                                                {item.username} <br></br> {item.phone_number}
                                            </figcaption>
                                        </figure>
                                    )
                                })}
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
