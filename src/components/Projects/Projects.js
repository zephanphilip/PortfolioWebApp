import React, { useState, useEffect } from 'react';
import './projects.css';
import { 
  Box, 
  Card, 
  Typography, 
  CardMedia, 
  CardContent, 
  CardActions,
  Button,
  Container,
  ButtonGroup,
  Chip
} from '@mui/material';
import { projects } from '../../data/constants';

function Projects() {
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [fadeIn, setFadeIn] = useState(true);

  // Extract unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  // Add animation effect when changing categories
  useEffect(() => {
    setFadeIn(false);
    
    const timer = setTimeout(() => {
      setDisplayedProjects(filteredProjects);
      setFadeIn(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Format the date for better display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <Box className="projects-section">
      <Container>
        <Box className="projects-title-container">
          <Typography variant="h4" className="projects-title">
            Projects
          </Typography>
        </Box>
        
        {/* Category Tabs */}
        <Box className="category-tabs">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              variant={activeCategory === category ? 'contained' : 'outlined'}
              color="warning"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </Box>
        
        {/* Projects Grid */}
        <Box className={`projects-grid ${fadeIn ? 'fade-in' : ''}`}>
          {displayedProjects.map((project) => (
            <Card className="project-card" key={project.title}>
              <div className="project-category-tag">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </div>
              
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                className="project-image"
              />
              
              <Box className="project-card-header">
                <Typography variant="h6" className="project-title">
                  {project.title}
                </Typography>
                
                <Typography variant="subtitle2" className="project-date">
                  {formatDate(project.date)}
                </Typography>
              </Box>
              
              <CardContent className="project-content">
                <Typography variant="body2" className="project-description">
                  {project.description}
                </Typography>
                
                {project.techStack && (
                  <Box className="project-tech-stack">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </Box>
                )}
              </CardContent>
              
              <CardActions className="project-actions">
                {project.category === '3d' ? (
                  <Button 
                    href={project.link} 
                    variant="contained" 
                    className="project-button view-button"
                  >
                    View Project
                  </Button>
                ) : (
                  <ButtonGroup 
                    variant="outlined" 
                    className="project-button-group"
                  >
                    <Button 
                      href={project.github} 
                      className="code-button"
                    >
                      View Code
                    </Button>
                    <Button 
                      href={project.webapp} 
                      className="live-button"
                    >
                      Live Demo
                    </Button>
                  </ButtonGroup>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;