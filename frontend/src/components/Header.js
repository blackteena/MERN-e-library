import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState()

  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/books') {
      setValue(0)
    }
    else if(location === '/add'){
      setValue(1)
    }
  }, [location]);

  return (
    <AppBar position='sticky' sx={{ backgroundColor: '#232F3D' }}>
      <Toolbar>
        <NavLink to='/' style={{ color: 'white' }}>
          <Typography>
            <AutoStoriesIcon />
          </Typography>
        </NavLink>
        <Tabs sx={{ ml: 'auto' }} textColor='inherit' indicatorColor='secondary' value={value}>
          <Tab LinkComponent={NavLink} to='/books' label='Books'></Tab>
          <Tab LinkComponent={NavLink} to='/add' label='Add product'></Tab>
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default Header;





