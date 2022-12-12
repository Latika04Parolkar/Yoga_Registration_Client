import React from 'react'
import axios from 'axios'

function MobileNumber(props) {

  async function OnNext() {
    var contact = document.getElementById('mn').value;
    var data = {contact: contact};
    var validMobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
    if(contact === '') {
      alert('Please enter your mobile number')
    }else {
      if(contact.match(validMobileRegex)) {
        const req = await axios.post('https://yogaregistrationtask.up.railway.app/addCustomer', data);
        if(req.data.monthStatus === 'First Time') {
          sessionStorage.setItem('contact', contact);
          props.change(1);
        }else {
          if(req.data.monthStatus === 'Same' || 'Different') {
            sessionStorage.setItem('batch', req.data.currentBatch);
            sessionStorage.setItem('contact', contact);
            sessionStorage.setItem('status', req.data.monthStatus);
            props.change(2);
          }
        }
      }else {
        alert('Enter valid mobile number');
      }
    }
  }

  return (
    <div className='w-screen h-screen flex flex-col relative sm:flex-row'>
      <div className='bg-[#F6FFFD] w-full h-1/3 sm:w-1/2 sm:h-full flex items-center justify-center border-b-2 border-[#89f7df] sm:border-r-2 sm:border-b-0'>
        <img src='././yoga2.gif' className='h-full sm:w-full sm:h-auto' alt='yoga'/>
      </div>
      <div className='bg-white w-full h-2/3 sm:w-1/2 sm:h-full flex flex-col'>
        <span className='sm:text-5xl md:text-6xl text-4xl font-bold text-black ml-20 sm:ml-28 sm:mt-32 mt-16'>The Shiv <span className='text-[#89f7df]'>Yoga</span> Studio</span>
        <label className='text-xl font-bold text-black ml-20 sm:ml-32 sm:mt-32 mt-16'>Mobile Number</label>
        <input id='mn' type='number' placeholder='9********7' className='border-[#89f7df] ml-20 sm:ml-32 outline-none border-2 w-2/5 h-10 rounded-lg px-2 text-lg'></input>
        <button onClick={() => OnNext()} className='bg-[#89f7df] rounded-lg w-24 h-10 ml-20 sm:ml-32 mt-8 flex items-center justify-center text-xl font-bold shadow-lg shadow-gray-400 cursor-pointer'>Next</button>
      </div>
    </div>
  )
}

export default MobileNumber