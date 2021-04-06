import React from 'react'
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import ProjectItem from './ProjectItem';
import { content as styles } from './styles';

import {
    Grid,
    Typography,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(styles);

const Content = ({ personalInfo, experience, project, education }) => {
    const classes = useStyles();

    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
    ));

    const projectItems = project.map((projectItem) => (
        <ProjectItem key={projectItem.id} projectItem={projectItem} />
    ));

    const educationItems = education.map((educationItem) => (
        <EducationItem key={educationItem.id} educationItem={educationItem} />
    ));


    return (
        <div>
            <Grid container className={classes.preview}>
                <Grid item>
                    <Typography className={classes.subtitle}>Work Experience</Typography>
                    {experienceItems}
                </Grid>
                <Grid item>
                    <Typography className={classes.subtitle}>Projects</Typography>
                    {projectItems}
                </Grid>
                <Grid item>
                    <Typography className={classes.subtitle}>Education</Typography>
                    {educationItems}
                </Grid>
            </Grid>
        </div>
    )
}

export default Content
