import React, { useEffect, useState } from 'react'
import MakePayment from '../components/MakePayment';
import PaymentSuccesful from '../components/PaymentSuccesful';

function UserDashboard(props) {

    const [isPaymentSectionOpen, setIsPaymentSectionOpen] = useState(false);
    const [showSuccesful, setShowSuccesful] = useState(false);
    const [s, setS] = useState('');

    function TogglePaymentSection() {
        setIsPaymentSectionOpen(!isPaymentSectionOpen);
    }

    function ToggleShowSuccesfull() {
        setShowSuccesful(!showSuccesful);
    }

    useEffect(() => {
        document.getElementById('batch').value = sessionStorage.getItem('batch');
        sets()
    })

    function OnPay() {
        sessionStorage.setItem('status', 'Different');
        sessionStorage.setItem('batch', document.getElementById('batch').value);
        setIsPaymentSectionOpen(true);
    }

    function sets() {
        setS(sessionStorage.getItem('status'));
    }

  return (
    <div className='w-screen h-screen justify-center items-center flex-col flex sm:flex-row'>
        <div className='bg-[#F2E7E5] w-full h-1/3 flex flex-col justify-center items-center sm:w-1/2 sm:h-full'>
            <img src='././yoga.gif' className='h-full sm:h-3/4' alt='yoga'/>
        </div>
        <div className='bg-[#FEFEFE] w-full h-2/3 sm:w-1/2 sm:h-full flex flex-col'>
            <div className='h-1/6 flex items-center pl-10 text-2xl font-bold'>Hello User</div>
            <label className='text-xl w-1/2 font-bold ml-16 sm:ml-28 mt-5'>Current Batch</label>
            {s === 'Different' ?
            <select name='batch' id='batch' className='text-black w-2/3 sm:w-2/5 ml-16 sm:ml-28 h-8 border-2 border-[#89f7df] rounded-lg px-1 outline-none'>
                <option value='Morning 1'>Morning Batch - 06:00 Am to 07:00 Am</option>
                <option value='Morning 2'>Morning Batch - 07:00 Am to 08:00 Am</option>
                <option value='Morning 3'>Morning Batch - 08:00 Am to 09:00 Am</option>
                <option value='Morning 4'>Morning Batch - 07:00 Pm to 08:00 Pm</option>
            </select>
            :
            <select name='batch' id='batch' className='text-black w-2/3 sm:w-2/5 ml-16 pointer-events-none sm:ml-28 h-8 border-2 border-[#89f7df] rounded-lg px-1 outline-none'>
                <option value='Morning 1'>Morning Batch - 06:00 Am to 07:00 Am</option>
                <option value='Morning 2'>Morning Batch - 07:00 Am to 08:00 Am</option>
                <option value='Morning 3'>Morning Batch - 08:00 Am to 09:00 Am</option>
                <option value='Morning 4'>Morning Batch - 07:00 Pm to 08:00 Pm</option>
            </select>
            }
            {s === 'Different' ?
            <span className='w-2/3 sm:w-2/5 ml-16 sm:ml-28 p-5 text-red-400 font-bold'>Select your batch and pay fess for this month.</span> :
            <span className='w-2/3 sm:w-2/5 ml-16 sm:ml-28 p-5 text-red-400 font-bold'>You will be able to change batch and make payment in next month.</span>
            }
            {s === 'Different' ?
                <button onClick={() => OnPay()} className='w-1/2 sm:w-1/4 h-10 bg-green-400 text-white ml-16 sm:ml-28 flex items-center justify-center rounded-lg shadow-2xl shadow-gray-400 cursor-pointer font-bold'>Make Payment</button> : null
            }
        </div>
        {isPaymentSectionOpen ? 
        <MakePayment ss={ToggleShowSuccesfull} mp={TogglePaymentSection} s={sets}/>
        : null
        }
        {showSuccesful ? 
        <PaymentSuccesful ss={ToggleShowSuccesfull}/>
        : null
        }
    </div>
  )
}

export default UserDashboard