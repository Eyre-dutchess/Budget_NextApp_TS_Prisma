"use client"

import { SafeMonth, SafeYear } from '@/app/type'
// import { getYearTotal } from '@/app/utils/GetTotal'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaCheck } from 'react-icons/fa'

interface TotalProps{
    allYears: SafeYear[]
    allMonths?: SafeMonth[] | null
}
export const GetTotal = ({allYears, allMonths}: TotalProps) => {
    const [total, setTotal] = useState<number>(1)

    const handleSubmit = (formData: FormData) =>{
        try {
            const yearName = formData.get("year-total") as string
            const monthName = formData.get("month-total") 
            console.log(monthName)
            if(!yearName){
                toast.error(" Year Name required!")
            }
            const curYear = allYears.find((year)=> year.yearName === yearName)
            if(!curYear){
                toast.error("this year doesn't exist")
                return
            }else{
                if(!monthName){
                    setTotal(curYear.yearTotalPrice!)
                    return
                }else{
                    const monthToYear = allMonths?.filter((mon)=> mon.yearId === curYear.id)
                    const curMonth = monthToYear?.find((mon)=> mon.monthName=== monthName)
                    setTotal(curMonth?.monthTotalPrice!)
                }
                }
        } catch (error) {
            toast.error("can't find the total price!")
        }
        }
    
    return (
        <div className='w-screen absolute bottom-0 left-0 pt-8 py-12 px-2 flex flex-row items-center justify-center gap-2 bg-gradient-to-b from-blue-100/5 via-blue-200/50 to-blue-800/75'>
            <p className='whitespace-nowrap text-blue-600 font-semibold'>Get Total: </p>
            <form action={handleSubmit} className='w-[280px]'>
                <input name="year-total" placeholder='2025' className='w-[120px] text-blue-800 placeholder:text-blue-600/75'/>
                <input name="month-total" placeholder='January' className='w-[120px]  text-blue-800 placeholder:text-blue-600/75'/>
                <button type="submit" className='cursor-pointer hover:bg-blue-400/75 hover:border-none hover:text-white text-blue-800/50 border rounded-full p-1 border-blue-800/50'><FaCheck /></button>
            </form>
            <p className='px-6 text-xl py-1 ml-4 rounded-full bg-blue-400 shadow-lg shadow-blue-200 text-white'>${total}</p>
        </div>
    )
}
