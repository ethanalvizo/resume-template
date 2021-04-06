import React from 'react';
import EducationItem from "./EducationItem";

import { 
    Grid,
    Button,
    makeStyles,
    Typography
} from '@material-ui/core';
import { education as styles} from "./styles";


const useStyles = makeStyles(styles);

const Education = ({ education, onChange, onAdd, onDelete }) => {
    const classes = useStyles();

    const educationItems = education.map((educationItem) => (
        <EducationItem 
            key={educationItem.id}
            id={educationItem.id}
            educationItem={educationItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))

    return (
        <Grid container className={classes.root}>
            <Typography className={classes.title}>Education</Typography>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {educationItems}
            </Grid>
            <Button onClick={onAdd} fullWidth={true} className={classes.add}>Add</Button>
        </Grid>
    )
}

export default Education;
