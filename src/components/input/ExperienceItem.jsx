import React from 'react';
import { 
    Grid,
    Button,
    Input,
    makeStyles,
} from '@material-ui/core';
import { experience as styles } from "./styles";

const useStyles = makeStyles(styles);

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
    const classes = useStyles();
    return (
        <div>
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="company"
                placeholder="Company"
                value={experienceItem.company}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="position"
                placeholder="Position"
                value={experienceItem.position}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="startDate"
                placeholder="Start Date"
                value={experienceItem.startDate}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="endDate"
                placeholder="End Date"
                value={experienceItem.endDate}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            {/* To do: Allow them to add description for their job role*/}
            <Button onClick={() => onDelete(id)} fullWidth={true} className={classes.delete}>Delete</Button>
        </div>
    )
}

export default ExperienceItem
