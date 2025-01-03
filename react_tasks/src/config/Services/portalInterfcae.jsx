
import { eidiko } from "../axiosinterceptor"

export const fetchportal= async (body)=>{

    return  await eidiko.get(`employee/get-employee/1006`,body).then((res)=>res.data)
}