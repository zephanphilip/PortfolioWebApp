/* MobileMenu.js */
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  Button,
  Divider
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import { styled } from '@mui/system';

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
}));

const MobileMenu = ({ open, onClose }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '75%',
          maxWidth: '300px',
          background: 'rgba(10, 25, 41, 0.95)',
          backdropFilter: 'blur(10px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        }
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box 
          component="div" 
          sx={{ 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            background: 'linear-gradient(135deg, #5D87FF 0%, #FF9A3C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.5rem',
          }}
        >
          zephan.dev
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Divider sx={{ background: 'rgba(255, 255, 255, 0.1)' }} />
      
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <MobileNavItem 
            key={item.id} 
            button 
            component={ScrollLink}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={onClose}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ 
                fontWeight: 500,
                fontSize: '1.1rem'
              }} 
            />
          </MobileNavItem>
        ))}
      </List>
      
      <Box sx={{ p: 3, mt: 2 }}>
        <Button 
          variant="contained" 
          color="secondary"
          href="https://drive.google.com/file/d/1hFnk5cSp6nvmJk5xvNlPIJaGYWbUDnWq/view?usp=sharing"
          target="_blank"
          fullWidth
          sx={{ 
            py: 1.5,
            boxShadow: '0 4px 12px rgba(255, 154, 60, 0.3)',
            '&:hover': {
              boxShadow: '0 6px 16px rgba(255, 154, 60, 0.4)',
            } 
          }}
        >
          Resume
        </Button>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
