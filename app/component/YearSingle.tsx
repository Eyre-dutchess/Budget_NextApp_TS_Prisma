"use client";

import React, { useCallback } from 'react'
import { FaMinus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { SafeYear } from '@/app/type';
import { delYear } from '../action/handleYears';
import { Button } from './modal/base/Button';

interface YearListProps{
  year: SafeYear 
}
export const YearSingle: React.FC<YearListProps>= ({year}) => {
  const router = useRouter()

  const handleDelYear = useCallback((id: string)=>{
    try {
      delYear(id)
      toast.success("this year deleted")
      location.reload()
    } catch (error) {
      toast.error("can't delete the year item")
    }
  }, [year])
  return (
      <div className='w-full  max-w-[300px] relative border-b-2 border-blue-200 flex flex-row items-center justify-center gap-3  p-2 cursor-pointer z-50
           hover:shadow hover:shadow-blue-200 hover:bg-blue-200/50 hover:rounded-full
          '>
        <h3 onClick={()=> router.push(`/year/${year.id}`)} >{year.yearName}</h3>
        <Button onClick={()=>handleDelYear(year.id)} delBtn icon={FaMinus} size={12} />
      </div>
  )
}