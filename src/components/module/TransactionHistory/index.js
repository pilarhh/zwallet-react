/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import samuel from '../../../assets/img/samuel.svg'
// import netflix from '../../../assets/img/netflix.svg'
// import christine from '../../../assets/img/christine.svg'
// import adobe from '../../../assets/img/adobe.svg'

const TransactionHistory = () => {
    const [state, setState] = useState([{
        name: "Samuel Suhi",
        desc: "Transfer",
        amount: "+Rp50.000"
    },
    {
        name: "Netflix",
        desc: "Subscription",
        amount: "+Rp100.000"
    },
    {
        name: "Disney+",
        desc: "Transfer",
        amount: "+Rp500.000"
    },
    {
        name: "WeTV",
        desc: "Subscription",
        amount: "+Rp20.000"
    }])

    useEffect(()=>{
        if (state) {
            setState([...state, ])
        }
    })

    return (
        <div class="col mt-3">
            {state.map((state) => {
                return (
                    <figure class="d-flex justify-content-between">
                        <div class="img-caption d-flex">
                            <img class="samuel-icon" src={samuel} alt="" />
                            <figcaption class="ms-4 1h-base">
                                {state.name}<br></br>{state.desc}
                            </figcaption>
                        </div>
                        <figcaption class="text-success fw-bold">{state.amount}</figcaption>
                    </figure>
                )
            })}

            {/* <figure class="d-flex justify-content-between">
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
            </figure> */}
        </div>
    )
}

export default TransactionHistory
