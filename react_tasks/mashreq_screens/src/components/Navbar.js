import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { useMediaQuery } from '@mui/material';

import logo1 from '../images/mashreq_img.jpg'

export default function ButtonAppBar() {
  const isMobile = useMediaQuery('(max-width: 300px)');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{ paddingRight: '15px', color: 'blue' }} />
            {!isMobile && (
              <Typography color='blue' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Menu
              </Typography>
            )}
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
            <img src={logo1} alt='not-found' width={isMobile ? 120 : 200} height={isMobile ? 40 : 60} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Badge color="error" badgeContent={1}>
              <NotificationsIcon style={{ color: 'black', paddingRight: '0.5px' }} />
            </Badge>
          </Box>

          {!isMobile && (
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" style={{ marginLeft: '25px' }} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
