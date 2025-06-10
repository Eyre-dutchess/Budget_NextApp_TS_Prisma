
import { getAllDays } from "@/app/action/handleDays";
import { getAllMonths } from "@/app/action/handleMonths";
import { getAllRecords } from "@/app/action/handleRecords";
import { getAllYears, getYearById } from "@/app/action/handleYears";
import { GetTotal } from "@/app/component/genetic/GetTotal";
import { YearPageSec } from "@/app/component/YearPageSec";
import {  SafeYear } from "@/app/type";


interface IParams{
  yearId?: string
}
export default async function YearPage(
  {params}:{params: Promise<IParams>}
) {
  const allYears = await getAllYears() as SafeYear[]
  const currentYear = await getYearById(params) as SafeYear 
  // the selected months in this year
  const allMonths = await getAllMonths(params)
  // all the days and records from the database
  const allDays = await getAllDays()
  const allRecords = await getAllRecords()
  
  
  return (
      <div className=" pt-40  min-h-[100vh] flex flex-col relative ">
          <div className="w-screen fixed top-0 left-0 z-20 ">
            <h1 className="w-full font-semibold pt-10 text-center text-white/50 text-6xl">Personal Budget</h1>
          </div>
          <div className='w-full flex flex-col  lg:items-center pt-10'>
              <h3 className="pl-[3vw] lg:pl-0 text-blue-100 text-3xl -translate-y-10 z-10 lg:text-center ">{currentYear?.yearName}</h3>
              <div className='absolute top-0 left-0 w-full h-[60vh] z-0  bg-gradient-to-b from-orange-600/75 via-blue-600  to-blue-200/25 blur-sm'></div>
          </div>
          <YearPageSec currentYear={currentYear} allMonths={allMonths} allDays={allDays} allRecords={allRecords}/>
          <GetTotal allYears={allYears} allMonths={allMonths}/>
        </div>
  )
}
