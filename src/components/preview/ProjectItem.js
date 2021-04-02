import React from 'react';
import {
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core';
import { project as styles } from "./styles";

const useStyles = makeStyles(styles);

const ProjectItem = ({ projectItem }) => {
    const classes = useStyles();
    const { 
        name,
        technology,
        description,
    } = projectItem;

    let list = "";
    const isNameAndTechnology = (name != '' && technology != '') ? true : false;

    if (typeof description !== 'undefined') {
        list = description.split('-').filter(item => item !== '').map(item => (
            <li 
                style={{
                    textAlign: 'left'
                }}
            >
                {item}
            </li>
        ));
    }

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.name}>
                        <Typography>{name} {isNameAndTechnology && <span className={classes.divider}> | </span>} <span className={classes.technology}>{technology}</span> </Typography>
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

export default ProjectItem
