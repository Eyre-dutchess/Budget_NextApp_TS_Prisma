import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import prisma from "@/app/libs/prismadb";

export const getSession = async () =>{
    return await getServerSession(authOptions)
}

export const getCurrentUser = async() =>{
    try {
        const session = await getSession()
        if(!session?.user?.email){
            return null
        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email: session.user.email as string
            }
        })
        if(!currentUser){
            return null
        }
        return {
            ...currentUser,
            emailVerified: currentUser.emailVerified?.toISOString() || null,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString() 
        }

    } catch (error: any) {
        return null
    }
}