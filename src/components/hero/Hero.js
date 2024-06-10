import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import {  styled } from '@mui/system';
import heroImage from '../../images/hero_bw.png'; // Adjust the path as necessary
import {ReactTyped} from 'react-typed';
import './hero.css';

const BackgroundStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  marginTop: '10px',
  padding: 0, 
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '120vh',
  backgroundPosition: '125% center', 
  height: '100vh', // Adjust height as needed
  [theme.breakpoints.down('sm')]: {
    backgroundSize: 'cover',
    backgroundPosition: '18% center', // Center the background for small screens
  },
}));

function Hero() {
  return (
    <div className="hero-container">
      <BackgroundStack direction="row" spacing={1} alignItems="center">
        <Container maxWidth="sm" className="hero-content"   sx={{ 
            mt: 3, 
            p: 0, 
            textAlign: { xs: 'left', sm: 'center' }, 
            margin: { xs: '0 !important', sm: '10px !important' } 
          }} >
          <Typography variant="h3" className="hero-text" gutterBottom>
            Hey there, <br></br><span className="hero-name" sx={{color:'warning'}}>Zephan Philip</span>
          </Typography>
          <Typography variant="h4" className="hero-text" paragraph>
            I'm a{' '}
            <ReactTyped
              strings={['Jr MERN Stack Dev', '3D Animator']}
              typeSpeed={150}
              loop
              backSpeed={20}
              cursorChar=">"
              showCursor={true}
            />
          </Typography>
          <Button href='https://drive.google.com/file/d/1DwzAv62hSxVytDLTrPJr9bOb-P5Ragpp/view?usp=sharing' variant='outlined' size='small' color='warning' className='hero-button' sx={{ 
              textAlign: 'left',
              marginLeft: { xs: '0px !important', sm: '100px !important' } 
            }} >Resume</Button>
        </Container>
      </BackgroundStack>
    </div>
  );
}

export default Hero;
