

import {Tab, Tabs } from "@mui/material";
import CustomTabPanel, { a11yProps } from "../CustomTabpanel/CustomTabpanel"
import Box from '@mui/material/Box';
import '../../assets/styles/OverviewTabs.css'

export default function CustomTabs({ TotalTab,value,onChange,Scrollbutton,maxWidth,}) {
    
    return (
        <>
        <div className="customtable" >

        <Box sx={{ borderBottom: 1, borderColor: 'divider',marginLeft:'20px' ,marginRight:'20px'}}
        
        >
         
          <Tabs
            value={value}
            style={{width:'600px'}}
            onChange={onChange}
            textColor="inherit"
            TabIndicatorProps={{
              style:{background:'#ff6f00'}
            }}
            //  variant={variant?variant:"fullWidth"}
            
            scrollButtons={Scrollbutton}
            aria-label="full width tabs example"
            sx={{".MuiTab-root":{fontFamily:'inherit',fontSize:'13px',maxWidth:maxWidth}}}
            //  sx={{
              //     ".MuiTab-root":{maxWidth:maxWidth,fontSize:"10px",padding:0,left:0,right:0,margin:0,top:0,bottom:0,minHeight:"35px",fontWeight:"bold"}
              //   }}
              >
        
            {TotalTab?.map(({ label }, i) => (
              <Tab label={label} key={i} {...a11yProps(i)} />
              ))}
          </Tabs>
          
        </Box>
              </div>
          <br></br>

        {TotalTab?.map(({ Component }, i) => (
          <CustomTabPanel value={value} index={i} key={i}>
            {Component}
          </CustomTabPanel>
        ))}
      </>
    );
  }
  