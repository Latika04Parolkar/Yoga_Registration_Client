import React from 'react'

function PaymentSuccesful(props) {
  return (
    <div className='absolute flex items-center justify-center bg-transparent w-full h-full'>
        <div className='bg-white w-3/4 sm:w-1/5 h-1/2  rounded-xl shadow-2xl flex flex-col justify-end items-center overflow-hidden'>
            <div className='h-1/2 w-full mb-5 flex items-center justify-center'>
                <img src='././payment.gif' className='h-full' alt='payment succesfull'/>
            </div>
            <span className='text-xl font-bold h-1/6 flex items-center'>Payment Succesfull</span>
            <div onClick={() => {props.ss(); props.p.change(2) }} className='bg-green-400 h-1/6 w-full flex items-center justify-center text-white font-bold text-lg cursor-pointer'>Continue</div>
        </div>
    </div>
  )
}

export default PaymentSuccesful