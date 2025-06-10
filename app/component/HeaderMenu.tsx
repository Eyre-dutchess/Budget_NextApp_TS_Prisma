"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { signOut } from 'next-auth/react';
import {  FaChevronDown, FaChevronUp} from 'react-icons/fa';

import { SafeUser, SafeYear } from '@/app/type';

import { YearList } from './YearList';
import { AddNewYear } from '@/app/component/genetic/AddNewYear';


interface UserProps{
  currentUser: SafeUser 
  curYears?: SafeYear[] | null
}
export const UserMenu : React.FC<UserProps>= ({currentUser, curYears}) => {
  const [show, setShow] = useState(false)
  const [listDir, setListDir] = useState("")

  useEffect(()=>{
    setShow(false)
  }, [])

   const toggle = useCallback(()=>{
          setShow(value=> !value)
        }, [show, currentUser])
      
  
  return (
    <div className='relative z-50 w-auto px-6 py-2 rounded-md text-white bg-blue-600/50 '>
        <div onClick={toggle} className='cursor-pointer flex flex-row items-center  justify-center gap-2'>
            <p  >Hi, {currentUser.name}</p>
            {show ? <FaChevronUp/> :<FaChevronDown />}
        </div>

        
        <div className={`${show?"scale-y-100":"scale-y-0" } transition origin-top absolute top-12 right-0 rounded-lg overflow-hidden flex flex-col w-full bg-blue-100/75  text-blue-600 text-sm`}>
          <AddNewYear />
          <hr />
          <YearList listDir='col' years={curYears}/>
          <p className='text-center pb-2 hover:shadow hover:bg-blue-100/75 cursor-pointer' onClick={()=>signOut()}>Sign out</p>
        </div>       
    </div>
  )
}
