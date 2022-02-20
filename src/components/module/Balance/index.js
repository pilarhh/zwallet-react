/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import Button from '../../base/Button'
import arrow2 from '../../../assets/img/arrow-up-2.svg'
import plus2 from '../../../assets/img/plus-2.svg'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../../redux/actions/userDetail'

const Balance = () => {
  const navigate = useNavigate()
  const handleTransfer = () => {
    navigate('/transfer')
  }

  const {id} = useParams()
  const dispatch = useDispatch()
  const dataBalance = useSelector((state) => state.UserDetail)

  useEffect(() => {
    dispatch(getDetails(id))
  }, [])

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div class="d-flex justify-content-between banner bg-primary p-3 mt-3">
      <div class="col text-white">
        <p class="fw-lighter">Balance</p>
        <h2 class="fw-bold fs-2">Rp{dataBalance.data}</h2>
        <p class="fw-lighter mt-3">{user.phone_number}</p>
      </div>
      <div class="d-flex justify-content-between d-none d-md-block">
        <Button class="btn rounded p-2 text-white border-white btn-transfer w-75" onClick={handleTransfer}>
          <img src={arrow2} alt="" />
          <span>Transfer</span>
        </Button>
        <Button class="btn rounded p-2 text-white border-white btn-transfer w-75 mt-4">
          <img src={plus2} alt="" />
          <span>Top Up</span>
        </Button>
      </div>
    </div>
  )
}

export default Balance
