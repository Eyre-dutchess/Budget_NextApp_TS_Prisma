"use client"

import qs from "query-string"

interface ReloadProps{
    params: URLSearchParams
    yearId?: string | null
    monthId?: string | null
    dayId?: string| null
    action?: string | null
}

export const ReloadMonthUrl = ({params, yearId, monthId, action}:ReloadProps) =>{

    let curQuery=  qs.parse(params.toString())

    const updatedQuery:any = {
            ...curQuery,
        monthId: monthId
    }
    if(action==="delete-month" || action==="add-new"){
        delete updatedQuery.monthId
    }
    if(action==="click-reload" && params.get("monthId")===monthId){
        delete updatedQuery.dayId
    }
    if(params.get("dayId")){
        delete updatedQuery.dayId
    }
    
    const url = qs.stringifyUrl({
            url:`/year/${yearId}`,
            query: updatedQuery
    }, {skipNull: true})
    return url
}
export const ReloadDayUrl = ({params, yearId, dayId, action}:ReloadProps) =>{
    let curQuery=  qs.parse(params.toString())

    const updatedQuery:any = {
            ...curQuery,
        dayId: dayId
    }

    if(action==="close-modal" || action==="add-record"){
        delete updatedQuery.dayId
    }
    if(params.get("dayId")===dayId){
        delete updatedQuery.dayId
    }
    
    const url = qs.stringifyUrl({
            url:`/year/${yearId}`,
            query: updatedQuery
    }, {skipNull: true})
    return url
}