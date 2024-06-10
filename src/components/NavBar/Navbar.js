import React from 'react'
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'

function Navbar() {
  return (
    <div>
      <CssBaseline />
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6'>zephan.dev</Typography>
          <Box sx={{ ml: 'auto', display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} href="#about">About</Button>
            <Button sx={{ color: '#fff' }} href="#skills">Skills</Button>
            <Button sx={{ color: '#fff' }} href="#projects">Projects</Button>
            <Button sx={{ color: '#fff' }} href="#education">Education</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
