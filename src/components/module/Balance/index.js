/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Button from '../../base/Button'
import arrow2 from '../../../assets/img/arrow-up-2.svg'
import plus2 from '../../../assets/img/plus-2.svg'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getDetailWallet } from '../../../redux/actions/walletDetail'

const Balance = () => {
  const navigate = useNavigate()
  const handleTransfer = () => {
    navigate('/transfer')
  }

  const user = JSON.parse(localStorage.getItem('user'))
  const handleTopup = () => {
    navigate(`/topup/${user.id}`)
  }

  const dispatch = useDispatch()
  const balance = useSelector((state) => state.WalletDetail)

  useEffect(() => {
    dispatch(getDetailWallet(user.id))
  }, [])

  return (
    <div class="d-flex justify-content-between rounded bg-primary p-3 mt-3">
      <div class="col text-white mt-2">
        <p class="fw-lighter">Balance</p>
        <h2 class="fw-bold fs-2">Rp{balance?.data.balance}</h2>
        <p class="fw-lighter mt-3">{balance?.data.phone_number}</p>
      </div>
      <div class="d-flex justify-content-between d-none d-md-block mt-2">
        <Button class="btn rounded-3 p-2 text-white border-white btn-transfer w-75" onClick={handleTransfer}>
          <img src={arrow2} alt="" />
          <span>Transfer</span>
        </Button>
        <Button class="btn rounded-3 p-2 text-white border-white btn-transfer w-75 mt-4" onClick={handleTopup}>
          <img src={plus2} alt="" />
          <span>Top Up</span>
        </Button>
      </div>
    </div>
  )
}

export default Balance
