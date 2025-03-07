import React, { useEffect, useRef } from 'react';
import { Box, Card, Typography, Container, Grid } from '@mui/material';
import './about.css'; // Make sure to create this file with the CSS styles

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate about section when it comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Add scroll listener to create parallax effect between hero and about
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutSection = document.querySelector('.about-section');
      
      if (aboutSection && scrollPosition < 500) {
        aboutSection.style.transform = `translateY(${scrollPosition * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // List of skills for tags
  const skills = [
    'Blender', 'Unity3D', 'MongoDB', 'Express.js', 
    'React', 'Node.js', 'JavaScript', '3D Animation',
    'Video Editing', 'Photo Editing', 'MERN Stack', 
    'UI/UX Design', 'Responsive Design'
  ];

  return (
    <Box className="about-section" ref={sectionRef}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} lg={18}>
            <Card 
              variant='outlined' 
              className="about-card"
              sx={{
                padding: { xs: '1.5rem', sm: '2.5rem' },
                borderColor: 'transparent',
                mt: { xs: '2rem', md: '0' } // Less top margin on mobile
              }}
            >
              <Typography variant='h4' className="about-title">
                About Me
              </Typography>
              
              <Typography variant='body1' className="about-text" paragraph>
                I am passionate and deeply engaged in the world of <span className="highlight">3D animation</span>, working extensively with Blender and Unity3D. My expertise lies in creating visually engaging automotive animations, blending technical precision with creative storytelling. As the co-founder of <span className="highlight">Pixabyte Studios</span>, an Instagram page dedicated to producing high-quality 3D animation videos, I enjoy exploring new techniques and pushing the boundaries of digital artistry.
              </Typography>
              
              <Typography variant='body1' className="about-text" paragraph>
                Alongside my animation skills, I am a motivated <span className="highlight">Full Stack Developer</span> specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). My journey in tech is fueled by a desire to create responsive and dynamic web applications that enhance user experiences.
              </Typography>
              
              <Typography variant='body1' className="about-text" paragraph>
                My skill set also extends to video and photo editing, enabling me to approach projects with a comprehensive, multimedia perspective. With a unique blend of technical and artistic abilities, I am eager to contribute to innovative projects and continue growing in both web development and digital media.
              </Typography>
              
  
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;