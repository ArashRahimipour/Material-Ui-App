import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const SideBar = ({mode, setMode}) => {
  return (
    <Box  flex={1} p={4} sx={{display: {xs:'none', sm: 'block'}}}>
      <Box position="fixed">
        <List>
            <ListItem disablePadding>
              <ListItemButton sx={{borderRadius:"5px"}} component='a' href='#home'>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="HomePage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{borderRadius:"5px"}} component='a' href='#simple-list'>
                <ListItemIcon>
                  <PostAddIcon/>
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{borderRadius:"5px"}} component='a' href='#simple-list'>
                <ListItemIcon>
                  <StoreIcon/>
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{borderRadius:"5px"}} component='a' href='#simple-list'>
                <ListItemIcon>
                  <GroupIcon/>
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{borderRadius:"5px"}} component='a' href='#simple-list'>
                <ListItemIcon>
                  <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{borderRadius:"5px"}} component='a' href='#simple-list'>
                <ListItemIcon>
                  <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{borderRadius:"5px"}} component='a' href='#simple-list'>
                <ListItemIcon>
                  <ModeNightIcon/>
                </ListItemIcon>
                <Switch onChange={e=> setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem>
          </List>
      </Box>
    </Box>
  )
}

export default SideBar;