import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { educationData } from '../../data/constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Ensure this path is correct

function Education() {
  return (
    <Box sx={{ padding: '0rem', position: 'relative',  color: 'white', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem' }}>Education</Typography>
      <VerticalTimeline lineColor="#FFFFFF">
        {educationData.map((edu, index) => (
          <VerticalTimelineElement className="container" key={index}
          contentStyle={{ background: 'none', boxShadow: 'none' }} // Remove background and box shadow
          contentArrowStyle={{ borderRight: '7px solid transparent' }} // Remove arrow border
          iconStyle={{ background: 'transparent', boxShadow: 'none' }} // Remove icon background and shadow
           icon={ <a href={edu.link} target="_blank" rel="noopener noreferrer">
           <img src={edu.logo} alt={edu.institution} style={{ width: '100%', height: '100%' }} />
         </a>}
        >
            <Card>
              <CardHeader
                title={edu.institution}
                subheader={edu.degree}
                titleTypographyProps={{ variant: 'h6' }}
                subheaderTypographyProps={{ variant: 'subtitle1' }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">{edu.duration}</Typography>
                <Typography variant="body2" color="textSecondary">Grade: {edu.grade}</Typography>
                <Typography variant="body2" paragraph>{edu.description}</Typography>
              </CardContent>
            </Card>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
}

export default Education;
