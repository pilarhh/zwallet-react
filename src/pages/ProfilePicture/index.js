/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import Input from "../../components/base/Input"
import Button from "../../components/base/Button"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changePicture } from '../../redux/actions/changePicture'
import { getDetails } from '../../redux/actions/userDetail'

const changeProfilePicture = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
    const id = user.id

    const data = useSelector((state) => state.UserDetail)

    useEffect(() => {
        dispatch(getDetails(user.id))
    }, [])

    const [form, setForm] = useState({
        profile_picture: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            profile_picture: e.target.files[0]
        })
    }

    const handleContinue = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append('profile_picture', form.profile_picture)
        dispatch(changePicture({ formData, navigate, id }))
        console.log(form);
    }

    return (
        <div className='d-flex flex-column wrapper-home'>
            <Navbar></Navbar>
            <main class="flex-fill my-3">
                <div class="container d-flex">
                    <Sidebar></Sidebar>
                    <div class="content flex-fill shadow-sm rounded my-3 d-flex">
                        <section class="p-3 ms-2">
                            <h4 class="d-none d-md-block fw-bold">Change Profile Picture</h4>
                            <p class="fw-lighter mt-4">
                                Choose the picture and then <br></br>
                                press continue to the next steps.
                            </p>
                            <form encType="multipart/form-data" onSubmit={handleContinue} className="d-flex flex-column">
                                <input type="file" name="file" id="file" onChange={handleChange}/>
                                {form.profile_picture ? (
                                    <img className="mt-3 rounded-3" src={URL.createObjectURL(form.profile_picture)} alt="" height='80' width='80'/>
                                ) : (
                                    <img className="mt-3 rounded-3" src={data?.data.profile_picture} alt="" height='80' width='80'/>
                                )}
                                <Button isLoading={loading} className="btn btn-primary text-white mt-3 p-2 border-0 mb-3 w-100" type="submit">Continue</Button>
                            </form>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default changeProfilePicture
