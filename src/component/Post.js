import React from 'react';
import { Favorite, FavoriteBorder, Label, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
  return (
    <div>
        <Card sx={{margin:"5px"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Arash Rahimipour"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://plus.unsplash.com/premium_photo-1661962984775-f8086e609650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8anVuZ2xlJTIwcm9hZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
        
        </Card>
        <Card sx={{margin:"5px"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Arash Rahimipour"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
        
        </Card>
        <Card sx={{margin:"5px"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Arash Rahimipour-Japan"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.unsplash.com/photo-1520312501384-dbdb83a1cb11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW4lMjBuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
        
        </Card>
        <Card sx={{margin:"5px"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Arash Rahimipour-Japan"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.unsplash.com/photo-1570459027562-4a916cc6113f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphcGFuJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
        
        </Card>
        <Card sx={{margin:"5px"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Arash Rahimipour-Australia"
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF1c3RyYWxpYSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
        
        </Card>
    </div>
  )
}

export default Post