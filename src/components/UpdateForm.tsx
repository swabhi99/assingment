import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { updateContact } from "../redux/slices/contacts";
import Error from './Error'
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateForm = (props:any) => {
  const {id} = useParams()
    const dispatch = useAppDispatch()
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName]= useState('')
    const [status,setStatus] = useState('')
    const [error,setError] = useState({error:false,msg:''})

    const navigate = useNavigate()
   
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        if(!firstName){
          setError({error:true,msg:'Please enter first name'})
        }else if(!lastName){
          setError({error:true,msg:'Please enter last Name'})
        }else if(!status){
          setError({error:true,msg:'Please select status'})
        }
        else{
          console.log(id)
         dispatch(updateContact({id,firstName,lastName,status}))
         navigate('/')
        }
    }

    const changeHandler = (e:any)=>{
       if(e.target.name==='firstName') setFirstName(e.target.value)
       else if(e.target.name==='lastName') setLastName(e.target.value)
    }

  return (

    <div className="grid grid-cols-6 h-screen">
    <div className=" row-span-full flex flex-col p-8 border-2">
          <div className='mt-8 text-2xl border-b-4 '><Link to='/'>Contacts</Link></div>
          <div className='mt-8 text-2xl border-b-4'><Link to='/charts'>Maps and charts</Link></div>
    </div>

    <div className="col-span-5 flex flex-col justify-center items-center"> 
    <form className="w-full max-w-sm p-4 bg-white" onSubmit={handleSubmit} >
        {error.error && <Error error={error.msg}/>}
        <label htmlFor="firstName">First Name: </label> <input type="text" name="firstName" value={firstName} className="bg-gray-200 border-2 border-gray-200 rounded w-full" onChange={changeHandler}/>
        <label htmlFor="lastName">Last Name: </label> <input type="text" name='lastName' value={lastName} className="bg-gray-200 border-2 border-gray-200 rounded w-full" onChange={changeHandler}/>

      <label htmlFor="status">Status: </label>
      <div className="flex items-center mb-2">
        <input
          id="default-radio-1"
          type="radio"
          value="active"
          name="status"
          onChange={(e)=>setStatus(e.target.value)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-900 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-900">
          Active
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          value="inactive"
          name="status"
          onChange={(e)=>{setStatus(e.target.value); }}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-900 ">
          Inactive
        </label>
      </div>
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-2" type="submit" >
         {`Save edited contact`}
      </button>
    </form>
             
    </div>
</div>
    
  );
}

export default UpdateForm;

