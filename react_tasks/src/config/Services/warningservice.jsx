
import { eidiko } from "../axiosinterceptor"

export const fetchwarningmail= async (body)=>{

    return  await eidiko.get(`/warningmail/get-all-caution-mail-report/2023-01-01/2023-11-01`,body).then((res)=>res.data)
  }