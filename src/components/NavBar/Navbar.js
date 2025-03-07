import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Button, 
  CssBaseline, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer,
  Box 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import './navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'education'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Handle navigation links click
  const handleNavLinkClick = (sectionId) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
        elevation={scrolled ? 4 : 0}
      >
        <Toolbar className="navbar-toolbar">
          <Typography 
            variant="h6" 
            component="a" 
            href="#top" 
            className="navbar-logo"
          >
            <CodeIcon sx={{ mr: 1 }} />
            zephan<span className="logo-accent">.dev</span>
          </Typography>
          
          <Box className="navbar-links">
            {['about', 'skills', 'projects', 'education'].map((section) => (
              <Button 
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => handleNavLinkClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>
          
          <IconButton 
            className="mobile-menu-button" 
            onClick={toggleMobileMenu} 
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Mobile Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        classes={{
          paper: `mobile-menu ${mobileMenuOpen ? 'open' : ''}`
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <IconButton 
          className="close-button" 
          onClick={toggleMobileMenu} 
          aria-label="close menu"
        >
          <CloseIcon />
        </IconButton>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {['about', 'skills', 'projects', 'education'].map((section) => (
            <Button 
              key={section}
              className="mobile-nav-link"
              onClick={() => handleNavLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </Box>
      </Drawer>
      
      {/* Empty toolbar for spacing */}
      <Toolbar />
    </>
  );
}

export default Navbar;