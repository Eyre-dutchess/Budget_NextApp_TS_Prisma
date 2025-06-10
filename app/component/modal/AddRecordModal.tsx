"use client";
import React, {  useEffect, useState } from 'react'
import { useRouter, useSearchParams} from 'next/navigation';
import { FaMinus } from 'react-icons/fa';

import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

import { Container } from '../genetic/Container';
import { Modal } from './base/Modal';
import { Input } from './base/Input';
import { Button } from './base/Button';
import { useRecordModal } from '@/app/hook/useRecordModal';
import { SafeDay, SafeMonth, SafeRecord, SafeYear } from '@/app/type';
import { delRecord } from '@/app/action/handleRecords';
import { ReloadDayUrl } from '@/app/utils/ReloadPageUrl';

interface RecordProps{
  curYear: SafeYear
  allMonths?: SafeMonth[]| null
  monthId: string
  allDays? : SafeDay[] | null
  dayId: string
  allRecords?: SafeRecord[] | null
}

export const AddRecordModal= ({curYear, allMonths, monthId, allDays, dayId, allRecords}: RecordProps) => {
  const addRecordModal = useRecordModal()
  const router = useRouter()
  const params = useSearchParams() as URLSearchParams

  const [records, setRecords] = useState(allRecords)
  const [curMonth, setCurMonth] = useState<SafeMonth>()
  const [curDay, setCurDay] = useState<SafeDay>()
  useEffect(()=>{
    const curM = allMonths?.find((month)=> month.id=== monthId)
    setCurMonth(curM)
    const curD = allDays?.find((day)=> day.id=== dayId)
    setCurDay(curD)
    const curR = allRecords?.filter((record)=> record.dayId=== dayId) 
    setRecords(curR)
  }, [allRecords, allDays, allMonths, router, monthId, dayId ])
 
    const {handleSubmit, register, formState:{errors}} = 
      useForm<FieldValues>({
        defaultValues:{
          detail:"",
          price:1,
          dayId: dayId
        }
      })

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
      
      axios.post("/api/records", data)
      .then(()=>{
        addRecordModal.onClose()
        toast.success("you added  new records!")
        updateTotal()
      })
      .catch(()=>{
        toast.error("can't add a new record")
      })
      .finally(()=>{
        const url = ReloadDayUrl({params, yearId:curYear.id, dayId, action:"add-record"})
        setTimeout(() => {
            router.push(url)
            location.reload()
        }, 500);
      })
    }

    const updateTotal = () =>{
            const curRecords = allRecords?.filter((rec)=> rec.dayId === dayId)
            const allRecordPrices = curRecords?.map((rec)=> rec.price) as number[]
            const dayTotal = allRecordPrices.reduce((a, b)=> a+b)

            const curDays = allDays?.filter((day)=> day.monthId === monthId)
            const allDayPrices = curDays?.map((day)=> day.dayTotalPrice) as number[]
            const monthTotal = allDayPrices.reduce((a, b)=> a+b)

            const curMonths = allMonths?.filter((month)=> month.yearId === curYear.id)
            const allMonthPrices = curMonths?.map((month)=> month.monthTotalPrice) as number[]
            const yearTotal = allMonthPrices.reduce((a, b)=> a+b)
            axios.post("/api/allTotal", {dayId, dayTotal, monthId,  monthTotal,yearId:curYear.id, yearTotal})
    }
    const handleDelete = (id: string)=>{
      try {
        delRecord(id)
        toast.success("record delete")
        const newRecords = records?.filter((item)=> item.id !== id)
        setRecords(newRecords)
        
      } catch (error) {
        toast.error("can't delete this record")
      }
    }

    const handleClose = () =>{
      addRecordModal.onClose();
      const url = ReloadDayUrl({params, yearId:curYear.id, dayId, action:"close-modal"})
      router.push(url)
    }
    const body = (
      <Container>
        <div className='w-full flex flex-col items-center justify-center gap-2 text-blue-800/75 pb-4 '>
        <div className='w-full px-8 py-4 flex flex-col gap-2'>
            <h6 className='font-semibold'>{curYear.yearName}--{curMonth?.monthName}--{curDay?.dayName}</h6>
            <Input id="detail" placeholder='e.g. eggs' type="text" label="Detail: " 
                  register={register} errors={errors} required
            />
            <Input id="price" placeholder='e.g. $16' type="text" label="Price: " 
                  register={register} errors={errors} required
            />
        </div>
        <hr />
        {(!records || records.length<1) ? (
            <p className='w-[90%] italic text-blue-200 shadow-inner rounded-md p-2 bg-blue-100/50'>Empty records</p>
          ) :(
          <div className='w-[90%]  shadow-inner py-4 rounded-md bg-blue-100/50'>
              <ol className=' pl-6 flex flex-col'>
                {records.map((item)=>{
                  return (
                    <li key={item.id} className='  flex flex-row-reverse justify-end items-center'>
                      <p className='text-sm pb-1'>{item.detail}---${item.price}</p>
                      <div className='relative w-[2em] h-[2em] '>
                        <Button icon={FaMinus} delBtn onClick={()=>handleDelete(item.id)}/>
                      </div>
                    </li>
                  )
                })}
              </ol>
          </div>
      )
    
    }
      </div>
      </Container>
    )
    
   
  return (
    <Modal 
      title="Expenses for today"
      body={body}
      open={addRecordModal.open}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}
