"use client"

import { useSearchParams } from 'next/navigation'
import React from 'react'

import { DaySingle } from './DaySingle'
import { SafeDay, SafeRecord } from '@/app/type'


interface DayListProps{
  days?: SafeDay[] | null
  records?: SafeRecord[] | null
  yearId: string
}
export const DayList: React.FC<DayListProps> = ({days,yearId, records}) => {
  const params = useSearchParams()
  const dayId = params?.get("dayId") as string
  
  if(!days || days.length < 1){
    return (
      <p className='text-blue-400/75 italic'>Empty list in this month! start now</p>
    )
  } ;
  return (
    <div  className='w-full  md:p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-4'>
        {days.map((day)=>{
          return <DaySingle key={day.id} day={day} selected={day.id === dayId} records={records} 
                yearId={yearId}
          />
        })}
        
    </div>
  )
}
