
import { Typography, AppBar, Card, CardActions, CardMedia, CardContent,CssBaseline,Grid,Toolbar,Container, Button, Box, createTheme, ThemeProvider } from '@mui/material';
// import ThemeProvider from '@mui/material';
import './App.css';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Stack } from '@mui/system';
import SideBar from './SideBar';
import Feed from './Feed';
import RightBar from './RightBar';
import NavBar from './NavBar';
// import useStyles from './theme';
// import {ThemeProvider} from '@emotion/react'
import Add from './component/Add';
import { useState } from 'react';

const App = () => {
  const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode : mode
    }
  })


  return(

    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <NavBar/>
        <Stack direction="row" spacing={2} justifyContent="center">
          <SideBar setMode={setMode} mode={mode}/>
          <Feed/>
          <RightBar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
    
  )
}
export default App;
