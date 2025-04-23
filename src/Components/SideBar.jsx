// import * as React from 'react';
import React,{ useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Diversity3Icon from '@mui/icons-material/Diversity3';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';
import { Tooltip } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DevicesIcon from '@mui/icons-material/Devices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import '../Pages/Main.css'
import BusinessIcon from '@mui/icons-material/Business';
import ScienceIcon from '@mui/icons-material/Science';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideBar=({ onCategoryChange })=> {
  // const [category, setCategory] = useState('');


  const arr = [
    {
        icon:<SportsScoreIcon fontSize='large'/>,
        name:"SPORTS"
    },
    {
        icon:<Diversity3Icon fontSize='large'/>,
        name:"WORLD"
    },
    {
        icon:<DevicesIcon fontSize='large'/>,
        name:"TECHNOLOGY"
    },
    {
        icon:<HealthAndSafetyIcon fontSize='large'/>,
        name:"HEALTH"
    },
    {
      icon:<BusinessIcon fontSize='large'/>,
      name:"BUSINESS"
  },
  {
    icon:<ScienceIcon fontSize='large'/>,
    name:"SCIENCE"
},
  ]    


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOnClick=(name)=>{
    console.log(name)
    //function
    onCategoryChange(name);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", paddingTop: "15vh" }}>
    <Box sx={{ display: 'flex',zIndex:1}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundImage: "linear-gradient(to right bottom, #000711, #001732, #002155, #002777, #272896)",color:"white"}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon fontSize='large'/>
          </IconButton>
          <Typography className='title' variant="h6" noWrap component="div" style={{fontSize:"2rem",fontWeight:"bold",fontFamily:"Agbalumo"}}>
          News Stack
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader style={{backgroundImage: "linear-gradient(to right bottom, #000711, #001732, #002155, #002777, #272896)",color:"white"}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: "white" }}/> : <ChevronLeftIcon style={{ color: "white" }}/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ backgroundImage: "linear-gradient(to right bottom, #000711, #001732, #002155, #002777, #272896)",zIndex:0,height:"100vh", color: "white" }}>
          {arr.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block',marginTop:"1.5rem",fontFamily:"Agbalumo" }} >
              <ListItemButton
              onClick={()=>handleOnClick(text.name)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  fontFamily:"Agbalumo"
                }}
              >
              <OverlayTrigger
                    style={{color:"white",zIndex:3}}
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={ <Tooltip className='title' id="button-tooltip" style={{background:"linear-gradient(to right bottom, #000711, #001732, #002155, #002777, #272896)",textAlign:'center',border:"1px solid white",borderRadius:"25px",padding:"10px",width:"10rem",color:"white",zIndex:3,marginLeft:"20px"}}>{text.name}</Tooltip>}
                  >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "white" 
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                </OverlayTrigger>
                <ListItemText className='title'  primary={<p style={{fontFamily:"Agbalumo"}}> {text.name} </p>} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <Outlet/>
    </Box>
    </div>
  );
}

export default SideBar