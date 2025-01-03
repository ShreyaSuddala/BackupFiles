export const Qatar_Gru_Maker="Qatar_Gru_Maker"
export const Qatar_Checker="Qatar_Checker"
export const Qatar_Cam="Qatar_Cam"
export const Qatar_Cpu="Qatar_Cpu"

export const All_PAGES_MAPPING=new Map()
All_PAGES_MAPPING.set(Qatar_Gru_Maker,"3333")
All_PAGES_MAPPING.set(Qatar_Checker,"4444")
All_PAGES_MAPPING.set(Qatar_Cam,"5555")
All_PAGES_MAPPING.set(Qatar_Cpu,"6666")

const backEndRole=["4444","3333"]

export function QccmsAuthorization(){
let page1=All_PAGES_MAPPING.get(Qatar_Gru_Maker)
let data=false
backEndRole?.forEach((item)=>{
    if(item===page1){
        data=true
        return data
    }
    else{
        return false
    }
})
return data

}
