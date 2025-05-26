"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'

interface ClientProps{
    children: React.ReactNode
}
export const ClientOnly = ({children}: ClientProps) => {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    }, [router])
    if(!mounted){
        return (
            <Loader />
        )
    }
  return (
    <div>
    {children}    
    </div>
  )
}
