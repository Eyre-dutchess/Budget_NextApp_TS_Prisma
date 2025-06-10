import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"


export const POST = async (request: Request) :Promise<NextResponse> =>{
    const resp = await request.json()
    const {dayId, dayTotal, monthId,  monthTotal,yearId, yearTotal} = resp

    const dayResult = await prisma.day.update({
        where:{
            id: dayId
        },
        data:{
            dayTotalPrice: dayTotal
        }
    })
    const monthResult = await prisma.month.update({
        where:{
            id: monthId
        },
        data:{
            monthTotalPrice: monthTotal
        }
    })
    const yearResult = await prisma.year.update({
        where:{
            id: yearId
        },
        data:{
            yearTotalPrice: yearTotal
        }
    })
   return NextResponse.json({dayResult, monthResult, yearResult})
}