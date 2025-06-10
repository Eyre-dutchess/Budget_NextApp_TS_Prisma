"use client"

import React from 'react'
import { FaCheck } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { Button } from '../modal/base/Button';
import { addNewYear } from '@/app/action/handleYears';


export const AddNewYear= () => {
  const router = useRouter()
  
  const handleSubmit = (formData:FormData) =>{
      try {
        addNewYear(formData)
        toast.success("you've added a new year!")
        router.push("/")
        location.reload()
      }
       catch (error) {
        toast.error("somethign went wrong")
      }
    }

  return (
    <form action={handleSubmit} >
        <input name="yearName" placeholder='e.g.2025' />
        <Button icon={FaCheck} type="submit"/>
    </form>
  )
}
