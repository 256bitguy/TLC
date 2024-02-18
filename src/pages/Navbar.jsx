import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import BasicMenu from '../component/Meni';

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Literary Club
          </Typography>
          {/* <div style={{ flex: 2, alignContent: 'flex-end' }}>
            <BasicMenu />
          </div> */}
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer} 
       >
        <List>
          <ListItem  component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem  component={Link} to="/gallery">
            <ListItemText primary="Teams" />
          </ListItem>
          <ListItem  component={Link} to="/second">
            <ListItemText primary="Gallery" />
          </ListItem>
          <ListItem  component={Link} to="/fourth">
            <ListItemText primary="Abouts" />
          </ListItem>
          <ListItem >
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem >
            <ListItemText primary="Join us" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
