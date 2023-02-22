import React from 'react'
import Eachuser from './eachuser'

function Adminusers() {
  return (
    <div className=" mx-36 text-black mb-10">

      <div className=' flex flex-row justify-between pb-5 mb-5' >

        <div className='flex flex-col '>

          <div className='text-2xl font-semibold'>
            Users
          </div>

          <div className='text-md font-light '>
            a list of all users in your account including their name, email , role
          </div>

        </div>

        <div className=''>
          <button className="dashboard-btn w-20 h-10 flex justify-center items-center ">Add User</button>
        </div>

      </div>


      {/* BELOW IS GRID WALA */}
      <div className='grid grid-cols-5 auto-cols-max pb-5 border-b-[1px] border-gray-300 '>
        <div className='Name  text-center font-semibold justify-self-start'>
          Name
        </div>
        <div className='Title font-semibold ml-8'>
          Title
        </div>
        <div className='Email font-semibold ml-16'>
          Email
        </div>
        <div className='Role font-semibold ml-32'>
          Role
        </div>
      </div>
      {/* below is the info */}
      <Eachuser name={"Lindsay Walton"} title={"Frontend developer"} email={"lindsay@gmail.com"} role={"Admin"} edit={false}/>
      <Eachuser name={"Mohammed Mehdi"} title={"Student"} email={"mohdmehdi@gmail.com"} role={"student"} edit={true}/>
      <Eachuser name={"Bhaumik Kore"} title={"Frontend developer"} email={"Bhaumikkore@gmail.com"} role={"Admin"} edit={true}/>
      <Eachuser name={"Neil Shukla"} title={"Full Stack developer"} email={"NeilShukla@gmail.com"} role={"Admin"} edit={false}/>
      <Eachuser name={"Sidharth Adrak"} title={"Backend developer"} email={"ginger@gmail.com"} role={"Admin"} edit={true}/>
      <Eachuser name={"Lindsay Walton"} title={"Frontend developer"} email={"lindsay@gmail.com"} role={"Admin"} edit={false}/>
      <Eachuser name={"Lindsay Walton"} title={"Frontend developer"} email={"lindsay@gmail.com"} role={"Admin"} edit={true}/>




    </div>
  )
}

export default Adminusers