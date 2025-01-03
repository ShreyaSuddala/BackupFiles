
import { eidiko } from "../axiosinterceptor"

export const skillservice={
    createskill:async function(skill){

        return await eidiko.post(`/emp-skills-tracking/get-all-present-skills`,skill).then((res)=>res.data)


    },

   
}