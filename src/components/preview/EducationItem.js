import React from 'react';
import {
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core';
import { education as styles } from './styles';

const useStyles = makeStyles(styles);

const EducationItem = ({ educationItem }) => {
    const classes = useStyles();
    const { 
        university,
        degree,
        subject,
        startDate,
        endDate,
    } = educationItem;

    return (
        <Grid container>
            <Grid item xl={12}>
                <Grid container>
                    <Grid item xl={6} className={classes.school}>
                        <Typography>{university}<span className={classes.divider}> | </span><span className={classes.subject}>{subject}</span></Typography>
                    </Grid>
                    <Grid item xl={6} className={classes.date}>
                        {startDate} - {endDate}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    )
}

export default EducationItem
