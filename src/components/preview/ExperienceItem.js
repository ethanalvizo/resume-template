import React from 'react';
import {
    Typography,
    Grid,
} from '@material-ui/core';

const ExperienceItem = ({ experienceItem }) => {
    return (
        <div>
            <Typography>
                {experienceItem.startDate} - {experienceItem.endDate}
            </Typography>
            <Typography>
                {experienceItem.position}
                <Typography>{experienceItem.company}</Typography>
            </Typography>
        </div>
    )
}

export default ExperienceItem
