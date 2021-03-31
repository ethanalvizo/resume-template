import React from 'react';
import {
    Typography,
    Grid,
} from '@material-ui/core';

const EducationItem = ({ educationItem }) => {
    return (
        <div>
            <Typography>
                {educationItem.startDate} - {educationItem.endDate}
            </Typography>
            <Typography>
                {educationItem.university}
                <Typography>Degree: {educationItem.degree}</Typography>
                <Typography>Subject: {educationItem.subject}</Typography>
            </Typography>
        </div>
    )
}

export default EducationItem
