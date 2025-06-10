import {User, Year, Month, Day, Record} from "../generated/prisma";

export type SafeUser = Omit<
    User,
    "emailVerified" | "createdAt" | "updatedAt"
    > & {
    createdAt: string
    updatedAt: string
    emailVerified: string | null
}

export type SafeYear = Omit<
    Year,
    "createdAt" | "updatedAt"> & 
{
    createdAt: string
    updatedAt: string
}

export type SafeMonth = Omit<
    Month,
    "createdAt" | "updatedAt"> & 
{
    createdAt: string
    updatedAt: string
}

export type SafeDay = Omit<
    Day,
    "createdAt" | "updatedAt"> & 
{
    createdAt: string
    updatedAt: string
}


export type SafeRecord = Omit<
    Record,
    "createdAt" | "updatedAt"> & 
{
    createdAt: string
    updatedAt: string
}
