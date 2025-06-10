"use client"

import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps{
    id: string
    placeholder?: string
    label?: string
    type?: string
    inputClass?: string
    labelClass?: string
    conClass?: string
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    required: boolean
    modalClass?: boolean
}
export const Input: React.FC<InputProps> = ({
    id, label, placeholder, type, inputClass, labelClass, conClass, register, errors, required, modalClass
}) => {
  return (
    <div className={`w-full h-full ${conClass && conClass} transition focus-within:border-none 
            ${modalClass ? "relative pt-4 border border-blue-800/50 rounded-md focus-within:shadow-md":"flex flex-row-reverse items-center gap-2 justify-center"}
        `}>
        <input 
            className={`peer w-full  h-full py-2 text-blue-800/75 outline-none  rounded-md pl-4 bg-transparent ${inputClass && inputClass} transition placholder:opacity-50 
                ${modalClass ?"focus:pl-4  -translate-y-1 focus:placeholder:opacity-25 ":"border-b-2  border-blue-200 px-4"}
                `}
            id={id} placeholder={placeholder} type={type} {...register(id, {required})}/>
        <label
            className={` ${modalClass ? "absolute top-2 left-2 scale-75 text-blue-800/50 -translate-y-3  peer-focus:scale-75 peer-focus:text-blue-800/50 peer-focus:-translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-blue-800/75 peer-placeholder-shown:translate-y-2"
                    :""}  transition  ${labelClass && labelClass}`}  htmlFor={id}>{label} </label>
    </div>
  )
}
