import React from 'react'
import {
    Typography, 
    Grid,
} from "@material-ui/core";

const header = ({ personalInfo }) => {
const { firstName, lastName, title } = personalInfo;

    return (
        <header>
            <Typography>{firstName} {lastName}</Typography>
            <Typography> {title} </Typography>
        </header>
    )
}

export default header
