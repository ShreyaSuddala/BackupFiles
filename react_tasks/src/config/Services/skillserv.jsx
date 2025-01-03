
import { eidiko } from "../axiosinterceptor"

export const fetchskill= async (body)=>{

    return  await eidiko.get(`/emp-skills-tracking/get-all-present-skills`,body).then((res)=>res.data)
  }

  // /emp-skills-tracking/get-all-present-skills