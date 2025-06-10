"use client"

import React, { useCallback } from 'react'
import { FaMinus } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import qs from "query-string"

import { SafeMonth} from '@/app/type'

import { Button } from './modal/base/Button'
import { delMonth } from '../action/handleMonths'
import { ReloadMonthUrl } from '../utils/ReloadPageUrl'


interface MonthItemProps{
    month: SafeMonth 
    selected? : boolean
    yearId: string
}

export const MonthSingle = (
  { month, selected, yearId}:MonthItemProps
 ) => {
  const router = useRouter()
  const params = useSearchParams() as URLSearchParams
  const monthId = month.id as string

  const handleClick = useCallback(() =>{
    const url = ReloadMonthUrl({params,yearId, monthId, action:"click-load"})
    setTimeout(() => {
      router.push(url)
  }, 500);
  }, [month, router, params])

  const handleDelMonth = (monthId: string)=>{
    try {
      delMonth(monthId)
      toast.success("this month deleted successfully!")
      const url = ReloadMonthUrl({params,yearId, monthId,action:"delete-month"})
      setTimeout(() => {
        router.push(url)
        location.reload()
    }, 500);
    } catch (error) {
      toast.error("can't delete this month")
    }
  }
  return (
    <div className={`w-full cursor-pointer relative rounded-t-md rounded-sm text-center py-1 
        ${selected? "text-blue-800/50 bg-blue-100 shadow-md shadow-blue-200/50 font-semibold" :"hover:outline-none hover:bg-blue-200 bg-blue-100/50 "} `}>
        <h6 onClick={handleClick} className='w-full text-start pl-2'>{month.monthName}</h6>
        <Button delBtn onClick={()=> handleDelMonth(month.id)} icon={FaMinus} size={10}/>
    </div>    
  )
}
