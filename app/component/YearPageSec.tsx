"use client"

import React, {  useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FaArrowLeftLong } from 'react-icons/fa6'

import { SafeDay, SafeMonth, SafeRecord, SafeYear } from '@/app/type'
import { AddNewDay } from './genetic/AddNewDay'
import { AddNewMonth } from './genetic/AddNewMonth'
import { AddRecordModal } from './modal/AddRecordModal'

import { MonthList } from './MonthList'
import { DayList } from './DayList'
import { Container } from './genetic/Container'


interface YearMainProps{
  currentYear: SafeYear 
  allMonths: SafeMonth[] | null
  allDays: SafeDay[] | null
  allRecords: SafeRecord[] | null
}
export const YearPageSec: React.FC<YearMainProps> = ({
  currentYear, allMonths, allDays, allRecords}) => {

  const router = useRouter()
  const params = useSearchParams()
  const monthId = params?.get("monthId") as string
  const dayId = params?.get("dayId")  as string

  const [curDays, setCurDays] = useState<SafeDay[]>()

  useEffect(()=>{
    const curAllDays = allDays?.filter((day)=> day.monthId === monthId)
    setCurDays(curAllDays)
  }, [router, params, monthId, allDays])


  return (
    <Container>
      <div className='mt-4 mb-32 relative grid gap-3 grid-cols-[100px_minmax(200px,_1fr)] lg:grid-cols-[200px_minmax(200px,_1fr)] p-1 z-20 min-h-[50vh] bg-white/25 shadow-lg rounded-lg '>
         <AddNewMonth currentYear={currentYear}  months={allMonths}/>
         <div className='min-w-[100px] max-w-[250px] w-full bg-blue-100/25 rounded-md pt-[2px] px-[2px] '>
           <MonthList allMonths={allMonths} yearId ={currentYear.id}/>
         </div>

         {monthId ?(
          <div className='rounded-r-md w-full relative overflow-y-hidden z-40 pt-16 '>
              <div  className='w-[210px] h-[40px] absolute top-1 left-0 cursor-pointer hover:shadow-lg  rounded-md bg-blue-100/25 shadow shadow-blue-200/50 '>
                <AddNewDay days={curDays} yearId = {currentYear.id} monthId = {monthId} />
              </div>
              <DayList  days={curDays} records = {allRecords} yearId = {currentYear.id}/>
          </div>
          ):(
            <p className='text-xl text-blue-600/75 flex flex-row items-center gap-2'><FaArrowLeftLong /> Add or Choose a month first</p>
          )}

          {dayId && (
               <AddRecordModal curYear={currentYear} allMonths={allMonths} monthId={monthId} allDays={curDays} dayId={dayId} allRecords={allRecords} />
          )}
         
      </div>
    </Container>
  )
}
