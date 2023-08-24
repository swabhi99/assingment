
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { deleteContact } from "../redux/slices/contacts";
import { Link } from 'react-router-dom';

const Contacts=(props:any)=> {
    const contacts = useAppSelector((state)=>state?.contact)
    const dispatch = useAppDispatch()
    const handleDelete = (id:any)=>{
        dispatch(deleteContact(id))
    }
  return (
    <div className="grid grid-cols-3 gap-2 w-screen">
       {
        contacts.map((contact:any)=>{
            const {firstName,lastName,status,id} = contact
            return(
                <div className='border-5 bg-blue-400 p-8' key={id}>
                    <h1 className='mt-2'>First Name : {firstName}</h1>
                    <h1 className='mt-2'>Last Name : {lastName}</h1>
                    <h3 className='mt-2'>Status : {status}</h3>
                    <Link type="button" className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to={`/update/${id}`}>Edit</Link>
                    <button type="button" className="mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>handleDelete(id)}>Delete</button>
                </div>
            )
        })
       }   
    </div>
  )
}

export default Contacts
