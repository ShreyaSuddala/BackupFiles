import { Tooltip } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

export default function CustomToolTip({children,title}) {
  return (
    <Tooltip title={title} sx={{cursor:"pointer"}} >
        {children}
    </Tooltip>
  )
}

CustomToolTip.propTypes = {
  children: PropTypes.node,
 
};
