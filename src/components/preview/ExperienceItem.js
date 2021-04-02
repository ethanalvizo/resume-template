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

    let list = "";
    const isCompanyAndPosition = (company != '' && position != '') ? true : false;
    const isDate = (startDate != '' && endDate != '') ? true : false;


    if (typeof description !== 'undefined') {
        list = description.split('-').filter(item => item !== '').map(item => (
            <li 
                style={{
                    textAlign: 'left',
                    fontFamily: 'Nanum Gothic',
                    lineHeight: '1.5'
                }}
            >
                {item}
            </li>
        ));
    }

    return (
        <Grid container style={{margin: '0em 0em 0.5em'}}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.jobTitle}>
                        <Typography>{company} {isCompanyAndPosition && <span className={classes.divider}> | </span>}<span className={classes.jobPosition}>{position}</span> </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.jobDate}>
                        {startDate} {isDate && <span>-</span>} {endDate}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <ul 
                    style={{
                        margin: '0'
                    }}
                >
                    {list}
                </ul>
            </Grid>
        </Grid>
    )
}

export default ExperienceItem
