/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import { useNavigate } from "react-router-dom"
import arrowGreen from '../../assets/img/arrow-down-green.svg'
import arrowRed from '../../assets/img/arrow-up-red.svg'
import graphic from '../../assets/img/graphic.svg'
import TransactionHistory from '../../components/module/TransactionHistory'
import Balance from '../../components/module/Balance'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/history')
  }

  return (
    <div className='d-flex flex-column wrapper-home'>
      <Navbar></Navbar>
      <div className='container h-100 d-flex'>
        <Sidebar></Sidebar>
        <div class="content flex-fill">
          <Balance></Balance>
          {/* <div class="d-flex justify-content-between banner bg-primary p-3 mt-3">
            <div class="col text-white">
              <p class="fw-lighter">Balance</p>
              <h2 class="fw-bold fs-2">Rp120.000</h2>
              <p class="fw-lighter mt-3">+62 813-9387-7946</p>
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
          </div> */}
          <div class="row g-0 main-content mt-3">
            <div class="d-none d-md-block col me-3 shadow-sm rounded">
              <div class="row g-0">
                <div class="col">
                  <div class="income">
                    <img src={arrowGreen} alt="" />
                    <p class="text-charts fw-normal">Income</p>
                    <h6 class="fw-bold">Rp2.120.000</h6>
                  </div>
                </div>
                <div class="col flex-grow-0">
                  <img src={arrowRed} alt="" />
                  <p class="text-charts fw-normal">Expense</p>
                  <h6 class="fw-bold">Rp1.560.000</h6>
                </div>
              </div>
              <div class="row g-0 justify-content-center">
                <img class="" height="250px" src={graphic} alt="" />
              </div>
            </div>
            <section class="col shadow-sm rounded p-2">
              <section class="d-flex justify-content-between">
                <h5 class="transaction-title fw-bold">Transaction History</h5>
                <p><a class="text-decoration-none" href="" onClick={handleClick}>See all</a></p>
              </section>
              <TransactionHistory></TransactionHistory>
            </section>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
