"use server"
import prisma from "@/app/libs/prismadb"


export const getAllRecords = async() =>{
    const records = await prisma.record.findMany({})
    if(!records)return null;
    const safeRecords = records.map((record)=>{
        return {
            ...record,
            createdAt: record.createdAt.toISOString(),
            updatedAt: record.updatedAt.toISOString()
        }
    })
    return safeRecords
}

export const delRecord = async(recordId: string) =>{
    await prisma.record.delete({
        where:{
            id: recordId
        }
    })
}