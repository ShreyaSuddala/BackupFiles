import { Box } from "@mui/material";
import CustomAccordion from '../../../Components/CustomAccordion/CustomAccordion';
import Block from '../CommonComponents/Block';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import UnBlock from '../CommonComponents/UnBlock';
import Debit from '../CommonComponents/Debit';
import IbanQuery from '../CommonComponents/IbanQuery';
import BlockQuery from '../CommonComponents/BlockQuery';
import CustomerDetails from '../CommonComponents/CustomerDetails';
import CustomTable from '../../../Components/CustomTable/CustomTable';
import CustomTextArea from '../../../Components/CustomTextArea/CustomTextArea';



export default function CamCpuChekerDetails({expanded,handleChangeAccordian,CommentsTable,AccountsTable,isChecker}){
    
    
    return (<>
    <Box sx={{mt:1.5}}>
  <CustomAccordion title={"Block"} expanded={expanded} onChange={handleChangeAccordian} children={<Block/>} panel={"panel1"} />
  </Box>
  
  <Box sx={{mt:1.5}}>
  <CustomAccordion title={"UnBlock"} expanded={expanded} onChange={handleChangeAccordian} children={<UnBlock/>} panel={"panel2"} />
  </Box>
  
  <Box sx={{mt:1.5}}>
  <CustomAccordion title={"Debit"} expanded={expanded} onChange={handleChangeAccordian} children={<Debit/>} panel={"panel3"} />
  </Box>
  <Box sx={{mt:1.5}}>
  <CustomAccordion title={"IBAN Query"} expanded={expanded} onChange={handleChangeAccordian} children={<IbanQuery/>} panel={"panel4"} />
  </Box>
  
  <Box sx={{mt:1.5}}>
  <CustomAccordion title={"Block Query"} expanded={expanded} onChange={handleChangeAccordian} children={<BlockQuery/>} panel={"panel5"} />
  </Box>
  
  <Box sx={{mt:1.5,ml:1.7,mr:2}}>
  <Box>
    <CustomTextArea maxRows={7} minRows={5} placeholder={"Comments"}></CustomTextArea>
    <Box sx={{display:"flex",justifyContent:"flex-end"}}>
    <CustomButton title={"Submit"}></CustomButton>
    </Box>
  </Box>
  
  <Box sx={{mt:1.5}}>
  <CustomTable TableName={"Comments Details"} rows={[]} headCells={CommentsTable}/>
  </Box>
  
  </Box>
  
  
  <Box sx={{mt:1.5}}>
  <CustomAccordion title={"Customer Details"} expanded={expanded} onChange={handleChangeAccordian} children={<CustomerDetails/>} panel={"panel6"} />
  </Box>
  
  <Box sx={{mt:1.5}}>
  <CustomAccordion title={"Account Details"} expanded={expanded} onChange={handleChangeAccordian} children={<CustomTable TableName={"Accounts Details"} rows={[]} headCells={AccountsTable}/>} panel={"panel7"} />
  </Box>
  

{
    isChecker?<Box sx={{mt:1.8,ml:1.7,display:"flex"}}>
    <CustomButton title={"Approve"}></CustomButton>
    <Box sx={{ml:1.5}}>
    <CustomButton title={"Reject"}></CustomButton>

    </Box>
</Box>:<Box sx={{mt:1.5,ml:1.7}}>
      <CustomButton title={"Send Back to Gru"}></CustomButton>
  </Box>
}

  
  </>)
  }
  