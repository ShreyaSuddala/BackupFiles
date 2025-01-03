
import { eidiko } from "../axiosinterceptor"

export const rev= async (body)=>{

  return  await eidiko.get(`employee/get-employee/1006`,body).then((res)=>res.data)
}
export const fetchreview= async (body)=>{

    return  await eidiko.get(`rating/get-ratings-by-year/${body}`).then((res)=>res.data)
  }