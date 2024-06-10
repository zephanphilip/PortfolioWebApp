import React from 'react';
import './projects.css';
import { Box, Card, CardHeader, CardMedia, Typography, CardContent, CardActions, Button, ButtonGroup } from '@mui/material';
import { projects } from '../../data/constants';

function Projects() {
  return (
    <Box className="project-box" sx={{ padding: '2rem' }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: '2rem' }}>Projects</Typography>
      <Box className="project-grid">
        {projects.map((project) => (
          <Card className="project-card" key={project.title}>
            <CardHeader
              title={project.title}
              subheader={project.date}
              titleTypographyProps={{ variant: 'h6', align: 'center' }}
            />
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              height="194"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">{project.description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button href={project.github} >View Code</Button>
                <Button href={project.webapp} >View Live App</Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
