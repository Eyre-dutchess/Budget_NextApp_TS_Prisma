"use client"
import React, { useCallback, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'

import { SafeDay } from '@/app/type'
import { addNewday } from '@/app/action/handleDays'
import { Button } from '../modal/base/Button'
import { ReloadDayUrl } from '@/app/utils/ReloadPageUrl'


interface AddNewProps{
  days?: SafeDay[] | null
  yearId: string
  monthId: string
}

export const AddNewDay: React.FC<AddNewProps> = ({days, yearId, monthId}) => {

  const router = useRouter()
  const [nameList, setNameList] = useState<string[]>()

  useCallback(()=>{
    if(!days)return null;
    const names = days.map((day)=> day.dayName) as string[]
    setNameList(names)
  }, [days, yearId, monthId])

const handleSubmit = (formData:FormData)=>{
  try {
    const nameInput = formData.get("dayName") as string
    if(!nameInput.trim()) return;
    if(!nameList || !nameList.includes(nameInput)){
      addNewday(formData, monthId)
      toast.success("created a new day")
      setTimeout(()=>{
        location.reload()
        router.refresh()
      }, 500)
    }else{
        toast.error("day already exists")
        return
      }
  } catch (error) {
    toast.error("can't add a new day")
  }
}
return (
  <form action={handleSubmit} className='h-full w-full '>
      <input name='dayName' placeholder='e.g. 16th. Monday' className='border-none'  />
      <Button type="submit" icon={FaCheck} iconClass='text-blue-100/75 transition font-semibold hover:text-blue-100 hover:scale-110'/>
  </form>
)
}
