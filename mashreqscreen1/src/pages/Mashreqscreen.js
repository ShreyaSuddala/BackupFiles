import React from 'react'
import PrimarySearchAppBar from '../layouts/Navbar'

import OverviewTabs from '../layouts/Tabs1/OverviewTabs';
import Additionalsysteminfo from '../layouts/Additionalsysteminfo';
import AddInfoTabs from '../layouts/Tabs2/AddInfoTabs';
import CaseDetails from './CaseDetails';


const Mashreqscreen = () => {

 
  return (
    <div  >
      <PrimarySearchAppBar/>
      <CaseDetails/>
      <OverviewTabs/>
      <br></br>
        <Additionalsysteminfo/>
      
        <AddInfoTabs/>
    
    </div>
  )
}

export default Mashreqscreen
