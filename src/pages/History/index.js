import React from 'react'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import Footer from '../../components/module/Footer'
import arrow from '../../assets/img/arrow-left-black.svg'
import samuel from '../../assets/img/samuel.svg'
import netflix from '../../assets/img/netflix.svg'
import christine from '../../assets/img/christine.svg'
import adobe from '../../assets/img/adobe.svg'
import arrowRed from '../../assets/img/arrow-up-red.svg'
import arrowGreen from '../../assets/img/arrow-down-green.svg'

const History = () => {
  return (
    <div className='d-flex flex-column wrapper-home'>
      <Navbar></Navbar>
      <header class="header-mobile p-3 d-md-none">
        <a href="home.html"><img src={arrow} alt="" /></a>
        <span class="text-mobile mx-3 fw-bold fs-4 fw-bold">History</span>
      </header>
      <main class="flex-fill my-3">
        <div class="container d-flex">
          <Sidebar></Sidebar>
          <div class="content flex-fill shadow-sm rounded">
            <section class="p-3 ms-2">
              <h4 class="d-none d-md-block fw-bold">Transaction History</h4>
              <div class="history-list">
                <p class="fw-lighter my-4">This Week</p>
                <figure class="d-flex justify-content-between">
                  <div class="img-caption d-flex">
                    <img class="samuel-icon" src={samuel} alt="" />
                    <figcaption class="ms-4 1h-base">
                      Samuel Suhi<br></br>Transfer
                    </figcaption>
                  </div>
                  <figcaption class="text-success fw-bold">+Rp50.000</figcaption>
                </figure>
                <figure class="d-flex justify-content-between">
                  <div class="d-flex">
                    <img class="samuel-icon" src={netflix} alt="" />
                    <figcaption class="ms-4 1h-base">
                      Netflix<br></br>Subscription
                    </figcaption>
                  </div>
                  <figcaption class="text-danger fw-bold">-Rp149.000</figcaption>
                </figure>
                <p class="my-4 fw-lighter">This Month</p>
                <figure class="d-flex justify-content-between">
                  <div class="d-flex">
                    <img class="samuel-icon" src={christine} alt="" />
                    <figcaption class="ms-4 1h-base">
                      Christine Mar...<br></br>Transfer
                    </figcaption>
                  </div>
                  <figcaption class="text-success fw-bold">+Rp150.000</figcaption>
                </figure>
                <figure class="d-flex justify-content-between">
                  <div class="d-flex">
                    <img class="samuel-icon" src={adobe} alt="" />
                    <figcaption class="ms-4 1h-base">
                      Adobe Inc.<br></br>Subscription
                    </figcaption>
                  </div>
                  <figcaption class="text-danger fw-bold">-Rp249.000</figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <footer class="text-center d-flex justify-content-around d-md-none">
        <button class="border-0"><img src={arrowRed} alt="" /></button>
        <button class="border-0"><img src={arrowGreen} alt="" /></button>
        <button class="btn-link text-decoration-none p-1 border-0">Filter by Date</button>
      </footer>
    </div>
  )
}

export default History
