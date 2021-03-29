import React from 'react'
import ExperienceItem from './ExperienceItem';

import {
    Grid,
    Typography,
} from "@material-ui/core";

const Content = ({ personalInfo, experience, education }) => {
    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
    ));


    return (
        <div>
            <Grid container>
                <Grid item>
                    <Typography>Experience</Typography>
                    {experienceItems}
                </Grid>
            </Grid>
        </div>
    )
}

export default Content
