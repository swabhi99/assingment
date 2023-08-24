
import {createSlice, current} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

let initialState:any[]=[]

export const contactSlice = createSlice( {
    initialState,
    name:'contacts',
    reducers:{
        addContact:(state,action:PayloadAction<any>)=>{
           state.push(action.payload)
           return state
        },
        deleteContact:(state,action:PayloadAction<string>)=>{
           state = state.filter((item)=> item.id!==action.payload)
           return state
         },
         updateContact:(state,action:PayloadAction<any>)=>{
            const {firstName,lastName,status,id} = action.payload
            const updateContact = state.find((item)=>item.id === id)
         if(updateContact){
            updateContact.firstName = firstName
            updateContact.lastName = lastName
            updateContact.status = status
          }
         }
    }
})

export const {addContact,deleteContact,updateContact} = contactSlice.actions
export default contactSlice.reducer