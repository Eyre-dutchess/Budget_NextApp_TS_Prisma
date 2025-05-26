
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request: Request) =>{
    const resp = await request.json()
    const { detail, price, dayId} = resp
    const result = await prisma.record.create({
        data:{
            detail, price:parseInt(price),
            dayId
        }
    })
    return NextResponse.json(result)

    
}
