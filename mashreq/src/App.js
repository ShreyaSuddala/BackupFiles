import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomTheme from "./GlobalStyles/CustomTheme/CustomTheme";
import "./App.css"
import {  useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Card } from "@mui/material";
import Login from "./Pages/CommonPages/Login";
import HomePage from "./Pages/QatarCourtCaseMangement/HomePage/HomePage";
import Header from "./Pages/CommonPages/Header";
import QatarCam from "./Pages/QatarCourtCaseMangement/QatarCam/QatarCam";
import QatarCpu from "./Pages/QatarCourtCaseMangement/QatarCpu/QatarCpu";
import QatarGruMaker from "./Pages/QatarCourtCaseMangement/QatarGruMaker/QatarGruMaker";
import QatarChecker from "./Pages/QatarCourtCaseMangement/QatarChecker/QatarChecker";
import NotFound from "./Pages/CommonPages/NotFound";
import UnAuthorised from "./Pages/CommonPages/UnAuthorised";
import LandingPage from "./Pages/CommonPages/LandingPage";

function App() {

  const[mashreqTheme,setMashreqtheme]=useState(CustomTheme())

  return (
    <ThemeProvider theme={mashreqTheme}>
   <Card sx={{height:"100vh",width:"100vw",borderRadius:0,overflow:"hidden"}} elevation={0}>
   <BrowserRouter basename="/mashreq">
    <Header/>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    <Route path="/unauthorised" element={<UnAuthorised/>}></Route>
    <Route path="/landing-page" element={<LandingPage/>}></Route>
    

    <Route path="/qccms-homepage" element={<HomePage/>}>
    </Route>

    <Route path="/qccms-qatar-cam" element={<QatarCam/>}></Route>
    <Route path="/qccms-qatar-cpu" element={<QatarCpu/>}></Route>
    <Route path="/qccms-qatar-gru-maker" element={<QatarGruMaker/>}></Route>
    <Route path="/qccms-qatar-checker" element={<QatarChecker/>}></Route>
   </Routes>
   </BrowserRouter>
   </Card>
   </ThemeProvider>

  );
}

export default App;
