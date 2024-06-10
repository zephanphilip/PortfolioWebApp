import React from 'react'
import { Box, Card, Typography } from '@mui/material';
import './about.css'
function About() {
  return (
    <Box>
          <Card variant='outlined' sx={{padding:{xs:'5px',sm:'30px'},maxWidth:{xs:'100%', sm: '345' },margin:{xs:'0'} ,borderColor:'lightblue'}}>
                <Typography variant='h4' gutterBottom>About</Typography>
                <Typography variant='h6' paragraph>I am a passionate and motivated beginner Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). My journey in the tech world is driven by a strong interest in creating dynamic and responsive web applications.</Typography>
                <Typography variant='h6' paragraph>In addition to my development skills, I am also proficient in 3D animation, with a focus on automotive projects using Blender. My creative flair extends to video and photo editing, allowing me to bring a unique and comprehensive perspective to my work.</Typography>
                <Typography variant='h6' paragraph>With a blend of technical knowledge and artistic talent, I am eager to contribute to innovative projects and continue growing in the field of web development and digital media.</Typography>
                </Card>
    </Box>
  )
}

export default About
