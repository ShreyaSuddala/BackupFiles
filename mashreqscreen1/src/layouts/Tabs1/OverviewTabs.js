import React from 'react'
import OverView from './OverView';
import CustomerDetails from './CustomerDetails';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import AccountDetails from './AccountDetails';


const OverviewTabs = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    
    const tabs =[{
      label:"Overview",
      Component:<OverView/>
  
    },
    {
      label:"Customer Details",
      Component:<CustomerDetails/>
    },
    {
      label:"Account Details",
      Component:<AccountDetails/>
    },
    {
      label:"Documents"
    }
    ]
  return (
    <div style={{overflowX:"scroll"}} >
      

      <CustomTabs
       maxWidth="100%" TotalTab={tabs} value={value} onChange={handleChange}/>
    
    </div>
  )
}

export default OverviewTabs
