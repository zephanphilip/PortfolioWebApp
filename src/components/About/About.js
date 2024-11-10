import React from 'react'
import { Box, Card, Typography } from '@mui/material';
import './about.css'
function About() {
  return (
    <Box>
          <Card variant='outlined' sx={{padding:{xs:'5px',sm:'30px'},maxWidth:{xs:'100%', sm: '345' },margin:{xs:'0'} ,borderColor:'lightblue'}}>
                <Typography variant='h4' gutterBottom>About</Typography>
                <Typography variant='h6' paragraph>I am passionate and deeply engaged in the world of 3D animation, working extensively with Blender and Unity3D. My expertise lies in creating visually engaging automotive animations, blending technical precision with creative storytelling. As the co-founder of Pixabyte Studios, an Instagram page dedicated to producing high-quality 3D animation videos, I enjoy exploring new techniques and pushing the boundaries of digital artistry.</Typography>
                <Typography variant='h6' paragraph>Alongside my animation skills, I am a motivated Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). My journey in tech is fueled by a desire to create responsive and dynamic web applications that enhance user experiences. </Typography>
                <Typography variant='h6' paragraph>My skill set also extends to video and photo editing, enabling me to approach projects with a comprehensive, multimedia perspective. With a unique blend of technical and artistic abilities, I am eager to contribute to innovative projects and continue growing in both web development and digital media.</Typography>
                </Card>
    </Box>
  )
}

export default About
