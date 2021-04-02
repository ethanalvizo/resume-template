import React from 'react';
import ProjectItem from './ProjectItem';

import { 
    Grid,
    Button,
    makeStyles,
    Typography
} from '@material-ui/core';
import { project as styles} from "./styles";


const useStyles = makeStyles(styles);

const Project = ({ project, onChange, onAdd, onDelete }) => {
    const classes = useStyles();

    const projectItems = project.map((projectItem) => (
        <ProjectItem 
            key={projectItem.id}
            id={projectItem.id}
            projectItem={projectItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))

    return (
        <Grid container className={classes.root}>
            <Typography className={classes.title}>Projects</Typography>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {projectItems}
            </Grid>
            <Button onClick={onAdd} fullWidth={true} className={classes.add}>Add</Button>
        </Grid>
    )
}

export default Project;