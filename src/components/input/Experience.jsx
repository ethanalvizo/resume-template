import React from 'react';
import ExperienceItem from "./ExperienceItem";

import { 
    Grid,
    Button,
    makeStyles,
    Typography
} from '@material-ui/core';
import { experience as styles} from "./styles";


const useStyles = makeStyles(styles);

const Experience = ({ experience, onChange, onAdd, onDelete }) => {
    const classes = useStyles();

    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem 
            key={experienceItem.id}
            id={experienceItem.id}
            experienceItem={experienceItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))

    return (
        <Grid container className={classes.root}>
            <Typography className={classes.title}>Experience</Typography>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {experienceItems}
            </Grid>
            <Button onClick={onAdd} fullWidth={true} className={classes.add}>Add</Button>
        </Grid>
    )
}

export default Experience;