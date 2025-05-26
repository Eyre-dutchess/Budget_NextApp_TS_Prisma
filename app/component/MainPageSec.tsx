"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

import { SafeUser, SafeYear } from '../type'
import { useLoginModal } from '../hook/useLoginModal'

import { AddNewYear } from './genetic//AddNewYear'
import { YearList } from './YearList'
import { useRouter } from 'next/navigation'


interface MainProps{
  currentUser?: SafeUser | null
  allYears?: SafeYear[] | null
   
}
export const MainPageSec: React.FC<MainProps> = ({currentUser, allYears}) => {
  const loginModal = useLoginModal()
  const router = useRouter()
  const [listDir, setListDir] = useState("")
  
  if(!currentUser){
    return (
      <p onClick={loginModal.onOpen} className=" absolute top-80 left-[10vw] z-30 w-auto px-2 text-start cursor-pointer font-semibold text-xl 
        hover:border-b-2 border-blue-100 hover:shadow-lg  text-blue-100 flex flex-row gap-2 items-center ">
        Login first 
        <FaArrowRightLong />
      </p>
    
    )
  }
  if(currentUser && (!allYears || allYears.length < 1)){{
    return (
      <div className='absolute top-80 left-[10vw] text-blue-600 z-30 w-auto px-2 text-start cursor-pointer font-semibold text-xl'>
        <AddNewYear />
      </div>
    )
  }}
  return (
    <div className='pt-12 lg:mt-24 lg:shadow-md  text-blue-600 z-30 w-full px-[10vw] mx-auto flex flex-col items-start lg:items-center justify-center '>
        <div className=' text-blue-600 z-30 w-auto px-2 text-start cursor-pointer font-semibold text-md mb-6'>
          <AddNewYear />
        </div>
        <p className='ml-4 flex flex-row items-center gap-2 font-semibold'>GO TO <FaArrowRightLong /></p>
        <div className='w-full mt-2 px-4'>
          <YearList listDir={"row"} years={allYears}/>
        </div>
    </div>
  )
}