"use client";

import React, { useCallback, useState } from 'react'
import {  useRouter, useSearchParams } from 'next/navigation'
import { FaCheck } from 'react-icons/fa'
import toast from 'react-hot-toast'

import { SafeMonth, SafeYear } from '@/app/type';
import { addNewMonth } from '@/app/action/handleMonths';
import { Button } from '../modal/base/Button';
import qs from 'query-string';
import { ReloadMonthUrl } from '@/app/utils/ReloadPageUrl';


interface NewMonthProps{
    currentYear: SafeYear
    months?: SafeMonth[] | null
}

export const AddNewMonth: React.FC<NewMonthProps> = ({currentYear,months}) => {

    const router = useRouter()
    const params = useSearchParams() as URLSearchParams
    const [nameList, setNameList] = useState<string[]>()

    useCallback(()=>{
      if(!months)return null;
      const names = months.map((month)=> month.monthName) as string[]
      setNameList(names)
    }, [months, currentYear])
  
  const handleSubmit = (formData:FormData)=>{
    try {
      const nameInput = formData.get("monthName") as string
      if(!nameInput.trim()) return;
      if(!nameList || !nameList.includes(nameInput)){
        addNewMonth(formData, currentYear.id)
        toast.success("created a new month")
       
        const url = ReloadMonthUrl({params, yearId:currentYear.id, monthId:"", action:"add-new" })
          setTimeout(()=>{
          location.reload()
          router.push(url)
        }, 500)
      }
        else{
          toast.error("month already exists")
          return
        }
    } catch (error) {
      toast.error("can't add a new month")
    }
  }
  return (
    <form action={handleSubmit} className=' absolute left-0 -top-12 max-w-[300px] rounded-full border-2 border-white/5 focus-within:bg-white/5 lg:left-[calc(35%_+_3vw)] '>
        <input name='monthName' placeholder='e.g. January'  className='border-none' />
        <Button type="submit" icon={FaCheck} iconClass='text-blue-100/75 transition font-semibold hover:text-blue-100 hover:scale-110'/>
    </form>
  )
}
