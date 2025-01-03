import { createTheme } from '@mui/material'


const font="'Lato', sans-serif"

// #004d40
//#1a237e
//#ff3d00
export default function CustomTheme(mode,color) {
 
   
    return  createTheme({

        palette:{
            primary:{
                main:color?color:"#006064"
            } ,
            secondary:{
                main:color?color:"#ef6c00"
            },
            white:{
                main:'#FFF'
            },
             mode:mode?mode:"light"
        },
        typography:{
            fontFamily:font,
            fontSize:13,
            
    
         h4:{
            fontFamily:font,
         }, 
         h6:{
            fontWeight:"bold",
            // color:"#4caf50"
         } ,
         subtitle2:{
            fontWeight:"bold"
         },

         custom1:{
            fontSize:"12px",
            fontFamily:font
         },
         custom2:{
            fontSize:"14px",
            fontFamily:font
         }

        //  body1:{
        //     fontSize:12
        //  } 
        },

    
    
    
    
    })
}