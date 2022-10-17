import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Lunch',
    },
    {
      img: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZyaWVuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      title: 'friend',
    },
   
    {
      img: 'https://images.unsplash.com/photo-1559692048-79a3f837883d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMGNvdXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Basketball',
    },
  
    {
      img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Travel',
    },
    {
      img: 'https://images.unsplash.com/photo-1602930685230-c4f47cc30fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3JrZWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      title: 'Snorkeling',
    },
    {
      img: 'https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      title: 'Motor Bike',
    },
    {
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      title: 'Party',
    },
  ];
  return (
    <Box  flex={2} p={4} sx={{display: {xs:'none', sm: 'block'}}}>
      <Box position="fixed" width={150}>
        <Typography variant='h6' fontWeight={100} textAlign="center">Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList sx={{ width: 350, height: 500 }} cols={2} >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
        </ImageListItem>
      ))}
    </ImageList>
  
      </Box>
    </Box>
  )
}

export default RightBar