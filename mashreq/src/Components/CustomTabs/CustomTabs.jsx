// CustomTabs

import { AppBar, Tab, Tabs } from "@mui/material";
import CustomTabPanel, { a11yProps } from "../CustomTabPanel/CustomTabPanel";

// Scrollbutton="auto"
// variant="scrollable"


export default function CustomTabs({ TotalTab,value,onChange,maxWidth,Scrollbutton,variant}) {
  
    return (
        <>
        <AppBar elevation={0} position="static" 
    
        sx={{".MuiTabs-root":{padding:0,margin:0,top:0,bottom:0,left:0,right:0,minHeight:"35px",},borderRadius:1}}
        >
          <Tabs
            value={value}
            onChange={onChange}
            indicatorColor="secondary"
      // TabIndicatorProps={{style:{}}}
         textColor="inherit"
          variant={variant?variant:"fullWidth"}
scrollButtons={Scrollbutton}
         aria-label="full width tabs example"
         sx={{
            ".MuiTab-root":{maxWidth:maxWidth,fontSize:"12.3px",padding:0,left:0,right:0,margin:0,top:0,bottom:0,minHeight:"35px",fontWeight:"bold",}
          }}
          >
            {TotalTab?.map(({ label }, i) => (
              <Tab label={label} key={i} {...a11yProps(i)} />
            ))}
          </Tabs>
        </AppBar>


        {TotalTab?.map(({ Component }, i) => (
          <CustomTabPanel value={value} index={i} key={i}>
            {Component}
          </CustomTabPanel>
        ))}
      </>
    );
  }
  