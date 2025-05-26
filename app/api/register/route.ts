
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) =>{
    const  resp = await request.json()
    const {name, email, password} = resp
   
    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await prisma.user.create({
        data:{
            name, email, hashedPassword
        }
    })
    return NextResponse.json(result)
}