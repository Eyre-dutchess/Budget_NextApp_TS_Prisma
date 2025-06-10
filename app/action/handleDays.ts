"use server"

import prisma from "@/app/libs/prismadb"


export const getAllDays = async() =>{
    
    const days = await prisma.day.findMany({})
    if(!days){
        return null
    }
    const allDays = days.map((day)=>{
        return {
            ...day,
            createdAt: day.createdAt.toISOString(),
            updatedAt: day.updatedAt.toISOString()
        }
    })
    return allDays
}

export const addNewday = async(formData: FormData, monthId:string)=>{
    const dayInput = formData.get("dayName") as string
    if(!dayInput.trim())return;
    
    await prisma.day.create({
        data:{
            dayName: dayInput,
            monthId: monthId
        }
    })
}


export const delDay = async(dayId: string) =>{
    const delRecords = prisma.record.deleteMany({
        where:{
            dayId: dayId
        }
    })
    const delDay = prisma.day.delete({
        where:{
            id: dayId
        }
    })
   await prisma.$transaction([delRecords, delDay])
}
export const getDayById = async (dayId: string)=>{
    try {
        if(!dayId || typeof dayId !=="string"){
            return null
        }
        const curDay = await prisma.day.findUnique({
            where:{
                id:dayId
            }
        })
        if(!curDay){
            return null
        }
        return {
            ...curDay,
            createdAt: curDay?.createdAt.toISOString(),
            updatedAt: curDay?.updatedAt.toISOString()
        }
    } catch (error: any) {
        return null
    }
}
