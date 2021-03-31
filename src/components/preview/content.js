import React from 'react'
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';

import {
    Grid,
    Typography,
} from "@material-ui/core";

const Content = ({ personalInfo, experience, education }) => {
    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
    ));

    const educationItems = education.map((educationItem) => (
        <EducationItem key={educationItem.id} educationItem={educationItem} />
    ));


    return (
        <div>
            <Grid container>
                <Grid item>
                    <Typography>Experience</Typography>
                    {experienceItems}
                </Grid>
                <Grid item>
                    <Typography>Education</Typography>
                    {educationItems}
                </Grid>
            </Grid>
        </div>
    )
}

export default Content
