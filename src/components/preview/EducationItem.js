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
        relevant
    } = educationItem;

    const isUniversityAndSubject = (university != '' && subject != '') ? true : false;
    const isDate = (startDate != '' && endDate != '') ? true : false;
    const isRelevant = (relevant != '' && typeof relevant != 'undefined') ? true : false;

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.school}>
                        <Typography>{university} {isUniversityAndSubject && <span className={classes.divider}> | </span>} <span className={classes.subject}>{subject}</span></Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.date}>
                        {startDate} {isDate && <span>-</span>} {endDate}
                    </Grid>
                </Grid>
            </Grid>
            {isRelevant && <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography className={classes.relevant}>Relevant Courses: <span className={classes.relevantInfo}>{relevant}</span></Typography>
            </Grid>}
        </Grid>
    )
}

export default EducationItem
