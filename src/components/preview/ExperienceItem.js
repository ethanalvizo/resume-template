import React from 'react';
import {
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core';
import { experience as styles } from "./styles";

const useStyles = makeStyles(styles);

const ExperienceItem = ({ experienceItem }) => {
    const classes = useStyles();
    const { 
        company,
        position,
        startDate,
        endDate,
        description,
    } = experienceItem;

    return (
        <Grid container>
            <Grid item xl={12}>
                <Grid container>
                    <Grid item xl={6} className={classes.jobTitle}>
                        <Typography>{company}<span className={classes.divider}> | </span><span className={classes.jobPosition}>{position}</span></Typography>
                    </Grid>
                    <Grid item xl={6} className={classes.jobDate}>
                        {startDate} - {endDate}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    )
}

export default ExperienceItem
