import { TextareaAutosize } from '@mui/material'

export default function CustomTextArea({placeholder,minRows,maxRows,value,onChange,isdisable}) {

  return (
    <TextareaAutosize
    color='primary'
    placeholder={placeholder}
    disabled={isdisable}

    minRows={minRows}
    maxRows={maxRows}
    value={value}
    onChange={onChange}
    style={{width:'300px',fontFamily:'sans-serif',fontSize:'15px'}}
    // style={{width:"50%",minWidth:"250px",maxWidth:"99.5%"}}
    
    />
  )
}
