"use client";
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation';

import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

import { useRegisterModal } from '@/app/hook/useRegisterModal';
import { useLoginModal } from '@/app/hook/useLoginModal';
import { Modal } from './base/Modal';
import { Input } from './base/Input';




export const LoginModal = () => {
    const router = useRouter()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    
    const toggle = useCallback(()=>{
        registerModal.onOpen()
        loginModal.onClose()
    }, [registerModal, loginModal])

    const {handleSubmit, register, formState:{errors}} = 
      useForm<FieldValues>({
        defaultValues:{
          email:"",
          password:""
        }
      })

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
      signIn("credentials", {
        ...data,
        redirect: false
      })
      .then((callback)=>{
        if(callback?.ok){
          loginModal.onClose()
          toast.success("log in succesfully")
          router.refresh()
          location.reload()
        }
        if(callback?.error){
          toast.error(callback.error)
        }
      })
    }
    const body = (
      <div className='w-full flex flex-col items-center justify-center gap-3 '>
        <div className='w-full px-8 py-6 flex flex-col items-center justify-center gap-3'>
            <Input id="email" placeholder='email' type="text" modalClass  label="Email: "
                  inputClass='placeholder-shown:pl-16'
                  register={register} errors={errors} required
            />
            <Input id="password" placeholder='password'  modalClass type="password" label="Password: "
                  inputClass='placeholder-shown:pl-24'
                  register={register} errors={errors} required
            />
        </div>
        <div className='w-full flex items-center justify-center mb-2 text-blue-800/25 h-[2px] bg-blue-800/25'>
          <p className='text-md'>or</p>
        </div>
        <div className='w-full text-center mb-4'>
          <p className='text-blue-600/50'>Don't have an account yet? 
          <span onClick={toggle} className='text-blue-800/50 hover:text-blue-800/75 hover:font-semibold cursor-pointer'> Register </span> now!</p>
        </div>
      </div>
    )
  return (
    <Modal 
      title="Welcome back!"
      body={body}
      open={loginModal.open}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}
