"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

import { SafeYear } from '@/app/type';
import { YearSingle } from './YearSingle';
import { Container } from './genetic/Container';

interface YearListProps{
  years?: SafeYear[] | null
  listDir?: string
}
export const YearList: React.FC<YearListProps>= ({years, listDir}) => {
  const router = useRouter()
  const [allYears, setAllYears] = useState(years)

  useEffect(()=>{
    setAllYears(years)
  }, [years, router])
  
  if(!allYears || allYears.length <1 ){
    return ( <hr/>)
  }
  return (
      <Container>
        <div className={`my-1 w-full flex items-center justify-center ${listDir=="row"?"flex-row gap-3":"flex-col"}`}>
           {allYears.map((year)=>{
                return <YearSingle key={year.id} year={year} />
             })}  
        </div>  
      </Container>   
  )
}