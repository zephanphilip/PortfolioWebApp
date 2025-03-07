import React from 'react';
import './skills.css';
import { Box, Card, Typography, Container } from '@mui/material';
import { skills } from '../../data/constants';

function Skills() {
  return (
    <Box className="skills-section">
      <Container>
        <Typography variant="h4" className="skills-title" align="center">
          Skills
        </Typography>
        
        <Box className="skills-grid">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.title} className="skill-card">
              <Box className="skill-card-header">
                <Typography variant="h6" className="skill-card-title" align="center">
                  {skillCategory.title}
                </Typography>
              </Box>
              
              <Box className="skill-items-container">
                {skillCategory.skills.map((skill) => (
                  <Box key={skill.name} className="skill-item">
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="skill-icon"
                    />
                    <Typography variant="body2" className="skill-name">
                      {skill.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;