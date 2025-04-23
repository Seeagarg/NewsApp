import React, { useState } from 'react'
// import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
import { Card } from 'react-bootstrap';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function NewsCard(props) {

  const [like,setLike] = useState(true)
   
  const handleLikeClick=()=>{
    console.log("liked");
    setLike(!like);
  }
  return (
    <div>
    <Card style={{boxShadow: "5px 10px 18px #888888"}}>
      <CardHeader 
      style={{fontSize:"1.5rem",fontWeight:"bold"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={props.icon} style={{objectFit:"cover,contain"}} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<span style={{fontSize:"1.5rem",fontWeight:"bold"}}>{props.title}</span>}
        subheader={<span style={{fontSize:"1rem"}}>{props.date.split('T')[0]}</span> }
      />
      <CardMedia
        component="img"
        height="194"
        image={props?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" style={{color:"black",fontSize:"1.5rem"}}>
         {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          <FavoriteIcon color={like ? "secondary" : "danger"} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
          </Card>
    </div>
  )
}

export default NewsCard
