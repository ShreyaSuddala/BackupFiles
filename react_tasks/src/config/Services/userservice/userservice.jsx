import { eidiko } from "../../axiosinterceptor"

export const login= async (body)=>{

  return  await eidiko.post(`auth/login`,body).then((res)=>res.data)
}