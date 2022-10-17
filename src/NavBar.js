import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import AppsIcon from '@mui/icons-material/Apps';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
})

const Search = styled('div')(({theme}) => ({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius: theme.shape.borderRadius,
    width:'40%',
}));

const Icons = styled(Box)(({theme}) => ({
  display:"none",
  alignItems:"center",
  gap: "20px",
  cursor:"pointer",
  [theme.breakpoints.up("sm")]:{
     display:"flex",
  }
}));

const UserBox = styled(Box)(({theme}) => ({
    display:"flex",
    alignItems:"center",
    gap: "10px",
    cursor:"pointer",
    [theme.breakpoints.up("sm")]:{
        display:"none",
     }
  }));

const NavBar = () => {
    const[open,setOpen]=useState(false);

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs:'none', sm:'block'}}}><AppsIcon/></Typography>
            <PetsIcon sx={{display: {xs:'block', sm:'none'}}}/>
            <Search><InputBase placeholder='search...'/></Search>
            <Icons>
                <Badge badgeContent={4} color="error" >
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{width:40, height:40, margin:"4px"}} 
                src="https://images.unsplash.com/photo-1622497170185-5d668f816a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwc3VpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                onClick={e => setOpen(true)}
                />
            </Icons>
            <UserBox>
                <Avatar sx={{width:40, height:40, margin:"4px"}} 
                    src="https://images.unsplash.com/photo-1622497170185-5d668f816a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwc3VpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                onClick={e => setOpen(true)}    
                />

                <Typography variant='span'>Arash</Typography>
            </UserBox>
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar;