"use client"

import React from 'react'
import { IconType } from 'react-icons'

interface BntProps{
    label?: string
    icon?: IconType
    onClick?: ()=> void
    close?: boolean
    confirm?: boolean
    navBtn?: boolean
    size?: number
    iconClass? :string
    delBtn?: boolean
    type?: "submit" | "reset" | "button"
}
export const Button: React.FC<BntProps> = ({
    label, icon: Icon, onClick, close, confirm, navBtn, size,iconClass, delBtn, type
}) => {
  return (
    <button type={type}  onClick={onClick} className={` transition duration-300 cursor-pointer flex flex-row items-center justify-center
        ${close ?"w-auto aspect-square rounded-full p-2 absolute top-2 right-2 text-orange-600/75 border border-orange-600/75 hover:bg-orange-600 hover:text-white hover:shadow-md hover:shadow-orange-600/75":""}
        ${delBtn ?"w-auto aspect-square rounded-full  absolute right-2 top-1 text-orange-600/75 border border-orange-600/75 opacity-25 hover:opacity-100 ":""}
        ${confirm ?"w-4/5 px-4 py-2 text-sm rounded-lg font-semibold mx-auto border-2 border-blue-600/50 text-blue-800/75 hover:border-blue-200/75 hover:bg-blue-200/75 hover:shadow-lg hover:shadow-blue-200/50 hover:text-white":""}
        ${navBtn ?"w-auto px-6 py-2 rounded-md   text-blue-800/25 bg-blue-100/50  hover:bg-blue-200/75 hover:shadow-md hover:outline  hover:shadow-blue-200/50 hover:text-white":""}`}>
        {label}
        {Icon &&<Icon size={size} className={iconClass}/>}
    </button>
  )
}
