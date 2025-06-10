"use client";
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation';

import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useRegisterModal } from '@/app/hook/useRegisterModal';
import { useLoginModal } from '@/app/hook/useLoginModal';
import { Modal } from './base/Modal';
import { Input } from './base/Input';

export const RegisterModal = () => {
    const router = useRouter()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    
    const toggle = useCallback(()=>{
        registerModal.onClose()
        loginModal.onOpen()
    }, [registerModal, loginModal])

    const {handleSubmit, register, formState:{errors}} = 
      useForm<FieldValues>({
        defaultValues:{
          name:"",
          email:"",
          password:""
        }
      })

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
      axios.post("/api/register", data)
      .then(()=>{
        registerModal.onClose()
        toast.success("you are registered!")
        setTimeout(()=>{
          location.reload()
          router.refresh()
        },500)
      })
      .catch(()=>{
        toast.error("can't register")
      })
      
    }
    const body = (
      <div className='w-full flex flex-col items-center justify-center gap-3 '>
        <div className='w-full px-8 py-6 flex flex-col items-center justify-center gap-3'>
            <Input id="name" placeholder='name' type="text" label="Name: " modalClass
                  inputClass='placeholder-shown:pl-16' 
                  register={register} errors={errors} required
            />
            <Input id="email" placeholder='email' type="text" label="Email: " modalClass
                  inputClass='placeholder-shown:pl-16'
                  register={register} errors={errors} required
            />
            <Input id="password" placeholder='password' type="password" modalClass label="Password: "
                  inputClass='placeholder-shown:pl-24'
                  register={register} errors={errors} required
            />
        </div>
        <div className='w-full flex items-center justify-center mb-2 text-blue-800/25 h-[2px] bg-blue-800/25'>
          <p className='text-md'>or</p>
        </div>
        <div className='w-full text-center mb-4'>
          <p className='text-blue-600/50'>Have an account already? 
          <span onClick={toggle} className='text-blue-800/50 hover:text-blue-800/75 hover:font-semibold cursor-pointer'>LogIn</span> now!</p>
        </div>
      </div>
    )
  return (
    <Modal 
      title="Welcome! Create new Account"
      body={body}
      open={registerModal.open}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}
