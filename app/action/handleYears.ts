"use server"

import prisma from "@/app/libs/prismadb"
import { getCurrentUser } from "./getCurrentUser"
import { SafeUser } from "../type"

interface IParams{
    yearId?: string
}

export const getAllYears = async() =>{
    const curUser = await getCurrentUser()
    const years = await prisma.year.findMany({
        where:{
            userId: curUser?.id
        }
    })
    if(!years){
        return null
    }
    const allYears = years.map((year)=>({
            ...year,
            createdAt: year.createdAt.toISOString(),
            updatedAt: year.updatedAt.toISOString()
    }))
    return allYears
}

export const addNewYear = async(formData: FormData)=>{
    const user = await getCurrentUser() as SafeUser
    const yearInput = formData.get("yearName") as string

    if(!yearInput.trim())return;
    await prisma.year.create({
        data:{
            yearName: yearInput,
            userId: user.id
        }
    })
}

export const delYear = async(yearId: string) =>{
    await prisma.year.delete({
        where:{
            id: yearId
        }
    })
}

export const getYearById = async (params: Promise<IParams>)=>{
    try {
        const {yearId} = await params;
        if(!yearId || typeof yearId !=="string"){
            return null
        }
        const curYear = await prisma.year.findUnique({
            where:{
                id:yearId
            }
        })
        if(!curYear){
            return null
        }
        return {
            ...curYear,
            createdAt: curYear?.createdAt.toISOString(),
            updatedAt: curYear?.updatedAt.toISOString()
        }
    } catch (error: any) {
        return null
    }
}

// export const getRecordsToYear = async(formData: FormData) =>{
//    const yearName = formData.get("year-total") as string

//    const allYears = await getAllYears() as SafeYear[]
//    const curYear = allYears.find((year)=> year.yearName === yearName)
//    const monthsToYear = await prisma.month.findMany({
//         where:{
//             yearId: curYear?.id
//         }
//    })
//    const monthIds = monthsToYear.map((mon)=> mon.id)
//    const daysToYear = await prisma.day.findMany({
//         where:{
//             monthId:{
//                 in:monthIds
//             }
//         }
//    })
//    const dayIds = daysToYear.map((day)=> day.id)
//    const recordsToYear = await prisma.record.findMany({
//     where:{
//         dayId:{
//             in:dayIds
//         }
//     }
//     })
//     return recordsToYear
// }