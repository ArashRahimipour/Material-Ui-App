import { Avatar, Box, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const StyledModal = styled(Modal) ({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box) ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})


const Add = () => {
    const[open,setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e => setOpen(true)}
        title="Delete" sx={{
        position:"fixed", 
        bottom:20, 
        left:{ xs:"calc(50% - 25px)", md:30}}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
    <Box width={400} height={250} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={5}>
        <Typography variant='h6' color="#CB8E66" textAlign="center">Create Post</Typography>
        <UserBox>
        <Avatar
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            sx={{width: 30 , height: 30}}
        />
        <Typography fontWeight={500} variant="span">Jhon Wick</Typography>
    </UserBox>
    <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="whats in your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
           <EmojiEmotionsIcon color='primary'/>
           <ImageIcon color='secondary'/>
           <VideoCameraBackIcon color='success'/>
           <GroupAddIcon color='error'/>
        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
            <Button sx={{width:"60rem"}}>Post</Button>
            <Button><CalendarTodayIcon/></Button>
        </ButtonGroup>
    </Box>
    
    </StyledModal>
    </>
  )
}

export default Add