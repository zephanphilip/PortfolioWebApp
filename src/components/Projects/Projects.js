// import React, { useState, useEffect } from 'react';
// import './projects.css';
// import { 
//   Box, 
//   Card, 
//   Typography, 
//   CardMedia, 
//   CardContent, 
//   CardActions,
//   Button,
//   Container,
//   ButtonGroup,
//   Chip
// } from '@mui/material';
// import { projects } from '../../data/constants';

// function Projects() {
//   // State for category filtering
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [displayedProjects, setDisplayedProjects] = useState([]);
//   const [fadeIn, setFadeIn] = useState(true);

//   // Extract unique categories from projects
//   const categories = ['all', ...new Set(projects.map(project => project.category))];

//   // Filter projects when category changes
//   useEffect(() => {
//     if (activeCategory === 'all') {
//       setFilteredProjects(projects);
//     } else {
//       setFilteredProjects(projects.filter(project => project.category === activeCategory));
//     }
//   }, [activeCategory]);

//   // Add animation effect when changing categories
//   useEffect(() => {
//     setFadeIn(false);
    
//     const timer = setTimeout(() => {
//       setDisplayedProjects(filteredProjects);
//       setFadeIn(true);
//     }, 300);
    
//     return () => clearTimeout(timer);
//   }, [filteredProjects]);

//   // Handle category change
//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//   };

//   // Format the date for better display
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
    
//     const date = new Date(dateString);
//     const options = { year: 'numeric', month: 'short' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   return (
//     <Box className="projects-section">
//       <Container>
//         <Box className="projects-title-container">
//           <Typography variant="h4" className="projects-title">
//             Projects
//           </Typography>
//         </Box>
        
//         {/* Category Tabs */}
//         <Box className="category-tabs">
//           {categories.map((category) => (
//             <Button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`category-button ${activeCategory === category ? 'active' : ''}`}
//               variant={activeCategory === category ? 'contained' : 'outlined'}
//               color="warning"
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </Button>
//           ))}
//         </Box>
        
//         {/* Projects Grid */}
//         <Box className={`projects-grid ${fadeIn ? 'fade-in' : ''}`}>
//           {displayedProjects.map((project) => (
//             <Card className="project-card" key={project.title}>
//               <div className="project-category-tag">
//                 {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
//               </div>
              
//               <CardMedia
//                 component="img"
//                 image={project.image}
//                 alt={project.title}
//                 className="project-image"
//               />
              
//               <Box className="project-card-header">
//                 <Typography variant="h6" className="project-title">
//                   {project.title}
//                 </Typography>
                
//                 <Typography variant="subtitle2" className="project-date">
//                   {formatDate(project.date)}
//                 </Typography>
//               </Box>
              
//               <CardContent className="project-content">
//                 <Typography variant="body2" className="project-description">
//                   {project.description}
//                 </Typography>
                
//                 {project.techStack && (
//                   <Box className="project-tech-stack">
//                     {project.techStack.map((tech, index) => (
//                       <span key={index} className="tech-chip">
//                         {tech}
//                       </span>
//                     ))}
//                   </Box>
//                 )}
//               </CardContent>
              
//               <CardActions className="project-actions">
//                 {project.category === '3d' || project.category === 'Game' ? (
//                   <Button 
//                     href={project.link} 
//                     variant="contained" 
//                     className="project-button view-button"
//                   >
//                     View Project
//                   </Button>
//                 ) : (
//                   <ButtonGroup 
//                     variant="outlined" 
//                     className="project-button-group"
//                   >
//                     <Button 
//                       href={project.github} 
//                       className="code-button"
//                     >
//                       View Code
//                     </Button>
//                     <Button 
//                       href={project.webapp} 
//                       className="live-button"
//                     >
//                       Live Demo
//                     </Button>
//                   </ButtonGroup>
//                 )}
//               </CardActions>
//             </Card>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Projects;

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
  // Updated to handle projects with multiple categories (as arrays)
  const getUniqueCategories = () => {
    const allCategories = new Set();
    allCategories.add('all');
    
    projects.forEach(project => {
      // Handle both string and array categories
      if (Array.isArray(project.category)) {
        project.category.forEach(cat => allCategories.add(cat));
      } else {
        allCategories.add(project.category);
      }
    });
    
    return Array.from(allCategories);
  };

  const categories = getUniqueCategories();

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => {
        // Check if the project's category matches the active category
        if (Array.isArray(project.category)) {
          return project.category.includes(activeCategory);
        }
        return project.category === activeCategory;
      }));
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

  // Function to render category tags
  const renderCategoryTags = (category) => {
    if (Array.isArray(category)) {
      return (
        <div className="project-category-tags">
          {category.map((cat, index) => (
            <div key={index} className="project-category-tag">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="project-category-tag">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>
    );
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
              {/* Use the new renderCategoryTags function */}
              {renderCategoryTags(project.category)}
              
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
                
                {project.tags && (
                  <Box className="project-tech-stack">
                    {project.tags.map((tech, index) => (
                      <span key={index} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </Box>
                )}
              </CardContent>
              
              <CardActions className="project-actions">
                {project.category === 'Animation' || 
                  (Array.isArray(project.category) && 
                   (project.category.includes('Animation') || project.category.includes('Game'))) || 
                  project.category === 'Game' ? (
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
                    {/* Check if webapp property exists before rendering button */}
                    {project.webapp && (
                      <Button 
                        href={project.webapp} 
                        className="live-button"
                      >
                        Live Demo
                      </Button>
                    )}
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