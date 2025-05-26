"use client"

import React from 'react'

import { useRegisterModal } from '../hook/useRegisterModal'
import { SafeUser, SafeYear } from '../type'

import { Button } from './modal/base/Button'
import { UserMenu } from './HeaderMenu'
import { FaHouse } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'


interface HeaderProps{
  currentUser?: SafeUser | null
  years?: SafeYear[] | null
}
export const Header: React.FC<HeaderProps> = ({currentUser, years})  => {
  const router = useRouter()
  const registerModal = useRegisterModal()
  return (
    <div className="z-40 fixed top-0 left-0 w-full py-4 px-[5vw] lg:px-[10vw] bg-blue-800/25 drop-shadow flex items-center justify-between ">
      <div onClick={()=> router.push("/") }><FaHouse className='cursor-pointer text-3xl text-blue-800/75 hover:text-blue-800/25 hover:border hover:border-blue-100 hover:bg-blue-100/50'/></div>
      {currentUser ?(
          <UserMenu currentUser = {currentUser} curYears = {years}/>
      ):(
          <Button navBtn onClick={registerModal.onOpen} label='Register/Log In'/>
      )}
    </div>
  )
}