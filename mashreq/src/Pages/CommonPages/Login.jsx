import { AppBar, Box, Card, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomTextfield from '../../Components/CustomTextField/CustomTextfield';
import { RoutedpageStyle } from '../../GlobalStyles/ParentComponentStyle/RoutedpageStyle';
import CustomTabPanel, { a11yProps } from '../../Components/CustomTabPanel/CustomTabPanel';
import { useTheme } from '@emotion/react';
import unauth from "../../Assets/unauth.jpg"
import CustomButton from '../../Components/CustomButton/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Person4Icon from '@mui/icons-material/Person4';
import PasswordIcon from '@mui/icons-material/Password';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'
import { QccmsAuthorization } from '../../Config/Authorization/AuthorizationConfig';
import CustomTabs from '../../Components/CustomTabs/CustomTabs';

function Mylogin({onSubmit}){
  const [login,setLogin]=useState({
    "userName":"",
    "password":""
  })

  return (
    <Card elevation={3} sx={{height:"300px",ml:0.15,mr:0.15,borderRadius:0,display:"flex",justifyContent:"center",alignItems:"center"}}>
       
      
       <Box sx={{width:"80%"}}>
       <form onSubmit={(e)=>{onSubmit(e,login)}}>
        <Box>
          <CustomTextfield  value={login.userName} onchange={(e)=>{setLogin({...login,userName:e.target.value})}} endIcon={<Person4Icon color='primary' />} isRequired={true} isFullwidth={true} placeholder={"U s e r N a m e"} label={"U s e r n a m e"}></CustomTextfield>
        </Box>

        <Box>
          <CustomTextfield type={"password"} value={login.password} onchange={(e)=>{setLogin({...login,password:e.target.value})}}  endIcon={<PasswordIcon color='primary' />} isRequired={true} isFullwidth={true} placeholder={"P a s s w o r d"} label={"P a s s w o r d"}></CustomTextfield>
        </Box>

         <Box sx={{mt:2,ml:0.4}}>
         
          <CustomButton endIcon={<ArrowForwardIcon/>} isFullwidth={true} title={"Sign in"}/>
        
        </Box>
        </form>
       </Box>
       

   </Card>
  )
}


export default function Login() {
  const themeColor=useTheme()
  const navigate=useNavigate()
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



const loginSubmit=(e,login)=>{
  e.preventDefault()
if(login.userName==="ppanda" && login.password==="ppanda"){
  navigate("/landing-page")
}
else{
  alert("Enter valid credentials")
}

}


const tabs = [
  {
    label: "Login",
    Component: <Mylogin onSubmit={loginSubmit}/>
  },
  // {
  //   label: "Forgot Password",
  //   Component: <>forgot password</>
  // },
];

  return (
    <Box sx={RoutedpageStyle.fisrstBoxStyle}>
      <Box sx={RoutedpageStyle.secondboxStyle}>
    
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"79%",width:"100%",background:`linear-gradient(20deg,rgba(0,0,0,0.1) 0,${themeColor?.palette?.primary?.main}),url(${unauth})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

         <Box sx={{height:"400px",width:"370px",mt:8}}>
         <CustomTabs TotalTab={tabs} maxWidth={"370px"} value={value} onChange={handleChange}></CustomTabs>
         </Box>
    </Box>

    <Footer></Footer>

      </Box>
    </Box>
  )
}
