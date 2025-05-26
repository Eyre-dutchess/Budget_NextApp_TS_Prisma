"use client";

import React from 'react'

interface ContainerProps{
    children: React.ReactNode
}
export const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='w-full max-w-[2520px] mx-auto  px-[calc(0.5em_+_0.5vw)] md:px-[calc(1em_+_1vw)] lg:px-[calc(1.5em_+_1.5vw)]'>{
    children
    }</div>
  )
}
