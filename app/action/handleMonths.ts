"use server"

import prisma from "@/app/libs/prismadb"

interface IParams{
    yearId?: string
}

export const getAllMonths = async(params:IParams) =>{
    const {yearId} = await params
    const months = await prisma.month.findMany({
        where:{
            yearId: yearId
        }
    })
    if(!months){
        return null
    }
    const allMonths = months.map((month)=>{
        return {
            ...month,
            createdAt: month.createdAt.toISOString(),
            updatedAt: month.updatedAt.toISOString()
        }
    })
    return allMonths
}

export const addNewMonth = async(formData: FormData, yearId:string)=>{
    const monthInput = formData.get("monthName") as string

    if(!monthInput.trim())return;
    await prisma.month.create({
        data:{
            monthName: monthInput,
            yearId: yearId
        }
    })
}

export const delMonth = async(monthId: string) =>{
    const daysToMonth = await prisma.day.findMany({
        where:{
            monthId: monthId
        }
    })
    const dayIds = daysToMonth?.map((day)=> day.id)
    const delRecords = prisma.record.deleteMany({
        where:{
            dayId:{
                in:dayIds
            } 
        }
   })
   const delDays = prisma.day.deleteMany({
    where:{
        monthId: monthId
    }
   })
   const delMonth = prisma.month.delete({
    where: {
        id: monthId
    }
   })
   await prisma.$transaction([delRecords, delDays, delMonth])
}

export const getMonthById = async(monthId: string) =>{
    try {
        const curMonth = await prisma.month.findUnique({
            where: {
                id: monthId
            }
        })
        if(!curMonth)return;
        return {
            ...curMonth,
            createdAt: curMonth.createdAt.toISOString(),
            updatedAt: curMonth.updatedAt.toISOString()
        }
    } catch (error:any) {
        return null
    }
}