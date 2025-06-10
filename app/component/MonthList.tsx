"use client"

import React, { useEffect, useState } from 'react'

import { SafeMonth} from '@/app/type'
import { MonthSingle } from './MonthSingle'
import {  useRouter, useSearchParams } from 'next/navigation'

interface MonthListProops{
  allMonths?: SafeMonth[] | null
  yearId: string
}
export const MonthList: React.FC<MonthListProops> = ({allMonths, yearId}) => { 
  const router = useRouter()
  const params = useSearchParams()
  const monthId = params?.get("monthId") as string
  const [curMonths, setCurMonths] = useState(allMonths)
  useEffect(()=>{
    setCurMonths(allMonths)
  }, [router])

  if(!curMonths || curMonths?.length<1){
    return (
        <p className='w-full rounded-t-md rounded-sm text-center italic py-1 bg-blue-200/50 text-blue-400/75 outline-blue-200/75'>empty</p>
    )
  }
  return (
    <div className='w-full flex flex-col items-center justify-center gap-[1px] text-blue-800/50'>
      {curMonths.map((month)=>{
        return <MonthSingle  key={month.id} selected={monthId===month.id}  month={month}  yearId={yearId}/>
      })}
    </div>
  )
}