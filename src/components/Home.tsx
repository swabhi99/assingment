import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {  Link } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'
import Form from './Form'
import Contacts from './Contacts'



const Home = () => {

   const contacts = useAppSelector((state)=>state.contact)
   const [editContact,setEditContact] = useState()
  
   const onEdit = (id)=>{
      const editContact = contacts.find((item)=>item.id===id)
      console.log(editContact)
      if(editContact) setEditContact(editContact)
   }

  return (
  <div className="grid grid-cols-6 h-screen">
  
     <div className="max-sm:col-span-6  lg:col-span-1 row-span-full flex flex-col p-8 border-2 ">
            <div className='mt-8 text-2xl border-b-4'><Link to='/'>Contacts</Link></div>
            <div className='mt-8 text-2xl border-b-4 '><Link to='/charts'>Maps and charts</Link></div>
      </div> 

      <div className="col-span-5 flex flex-col ">
      <div className=" bg-blue-700 h-1/7">
         <h1 className='text-4xl text-center'>contact keeper</h1>
      </div>
               <div className=' flex-auto flex justify-center items-center'>
                  <Form />
               </div>
               <div className=' flex-auto flex justify-center p-6'>
                  {contacts.length===0?<div className='border-2 border-gray-500 p-3 w-50 flex gap-3 items-center'>
                                       <div>X</div>
                                       <h2>No Contact Found Please add contact from Create Contact Button</h2>
                                  </div>:<Contacts editClick={onEdit} editContact={editContact}/>}
               </div>
      </div>
  </div>
  )
}

export default Home

