"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from "query-string"
import axios from 'axios'
import toast from 'react-hot-toast'

import { SafeDay, SafeRecord } from '@/app/type'
import { useRecordModal } from '../hook/useRecordModal'
import { Button } from './modal/base/Button'
import { delDay} from '../action/handleDays'



interface DayProps{
  day: SafeDay
  selected?: boolean
  records?: SafeRecord[] | null
  yearId : string
}
export const DaySingle: React.FC<DayProps> = ({day, yearId, selected, records}) => {
  const addRecordModal = useRecordModal()
  const router = useRouter()
  const params = useSearchParams()

  const [curRecords, setCurRecords] = useState(records)
  const [dayTotal, setDayTotal] = useState(1)

  useEffect(()=>{
    const current = records?.filter((rec)=> rec.dayId === day.id)
    setCurRecords(current)

    setDayTotal(day.dayTotalPrice!)
  }, [router, params, records , day, ])

  const handleClick = useCallback(() =>{
    
      addRecordModal.onOpen()
      let curQuery = {}
      if(params){
        curQuery = qs.parse(params.toString())
      }
      const updatedQuery: any = {
        ...curQuery,
        dayId: day.id
      }
  
      if(params?.get("dayId")===day.id){
        delete updatedQuery.dayId
      }
      const url = qs.stringifyUrl({
        url:`/year/${yearId}`,
        query: updatedQuery
      }, {skipNull: true})
  
      router.push(url)
    
  }, [day, params, router])

  const handleDel = (dayId: string)=>{
      delDay(dayId)
      router.refresh()
      toast.success("this day deleted!")
  }

  return (
    <div className={`relative w-full max-w-[300px]  hover:shadow-lg hover:bg-blue-100 aspect-square rounded-md shadow shadow-blue-200/50  ${selected ? " bg-blue-100":" bg-blue-100/50"}`}>
        <div onClick={handleClick} className={`flex flex-col justify-between w-full h-full px-4 py-2 pb-[3.5em] text-blue-800/75 cursor-pointer `}>
            <h6>Day: {day?.dayName}</h6>
            
            <div className='w-full font-light  text-blue-400/50 text-xs overflow-hidden rounded-md shadow-inner'>
              {(!curRecords || curRecords.length < 1)?(
                <p className='italic w-full pl-4 py-2 '>Empty records</p>
              ):(
                <ul className='list-disc pl-4  flex flex-col w-full bg-white/50 py-2 overflow-auto'>
                      {curRecords.map((rec)=>{
                        return (
                          <li  key={rec.id}>
                            <p>{rec.detail} --- ${rec.price}</p>
                          </li>
                        )
                      })}
                </ul>
              )}
            </div>
            <p >Total: <span className='border-b border-blue-800/75 px-2'>${dayTotal}</span></p>
        </div>
        <div className='w-full absolute bottom-2 opacity-50 scale-75 hover:opacity-95'>
          <Button label="Delete" confirm onClick={()=>handleDel(day.id)}/>
        </div>
    </div>
  )
}
