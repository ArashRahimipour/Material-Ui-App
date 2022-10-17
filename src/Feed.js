
import { Box } from '@mui/material';
import React from 'react';
import Post from './component/Post';

const Feed = () => {
  return (
    <Box flex={4} p={4}>
      <Post/>
    </Box>
  )
}

export default Feed