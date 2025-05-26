"use client"

import React from 'react'
import { PropagateLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div className='w-full h-full flex items-center justify-center text-3xl text-orange-400'>
        <PropagateLoader />
    </div>
  )
}
