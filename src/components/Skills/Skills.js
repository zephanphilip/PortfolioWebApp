import React from 'react';
import './skills.css';
import { Box, Card, CardHeader, CardMedia, Typography, CardContent } from '@mui/material';
import { skills } from '../../data/constants';

function Skills() {
  return (
    <Box className="skill-box" sx={{ padding: '2rem' }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: '2rem' }}>Skills</Typography>
      <Box className="skills-container" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {skills.map((skill) => (
          <Card sx={{ maxWidth: {sm:'100%'}, marginTop: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} key={skill.title}>
            <CardHeader
              title={skill.title}
              titleTypographyProps={{ variant: 'h6', align: 'center' }}
            />
            <CardContent>
              <Box className="skill-items" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {skill.skills.map((item) => (
                  <Box key={item.name} sx={{ textAlign: 'center', margin: '0.5rem' }}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      sx={{ height: {xs:'40px',sm:'60px'}, width:{xs:'40px',sm:'60px'}, marginBottom: '0.5rem' }}
                    />
                    <Typography variant="body2">{item.name}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
