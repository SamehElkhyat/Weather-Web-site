"use client"
import React, { useState } from "react";
import "./Navbar.css";
import logo  from  "./Weather.png";


import { motion} from "framer-motion";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Divider,
  Drawer,
} from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const DrawerList = (    <>


  <div className="text-danger fw-bold">

  <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List >

        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>

            <ListItemButton>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>

        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem  key={text} disablePadding>

            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>

  </div>
    
  </>    

  );
  return (
    <>
   <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}

      </Drawer>
    </div>

      <motion.Box initial={{opacity:0}}
    animate={{opacity:1,transition:{duration:0.7}}}
    exit={{opacity:0,transition:{duration:0.4}}}
    className="bg-dark" sx={{ flexGrow: 1 }}>
        <AppBar className="" 
        id='finalNAv'
        position="static">
          <Toolbar>
            <Typography className="typography " variant="h4" component="div">
              <motion.div variants={container} className="">
              <Image alt="Weather today " src={logo} className="w-25 h-25 " />
              </motion.div>


            </Typography>

       
<div className="ms-auto p-0">
<Button id="sameh" className="text-danger" onClick={toggleDrawer(true)}>Side Menu</Button>
            </div>
          </Toolbar>
        </AppBar>
      </motion.Box>
    </>
  );
}
