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
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
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
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
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
                </Grid>
            </Grid>
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="description"
                placeholder="Description"
                value={experienceItem.description}
                fullWidth={true}
                className={classes.inputDescription}
                multiline={true}
                disableUnderline={true}
                rows="3"
            />
            <Button onClick={() => onDelete(id)} fullWidth={true} className={classes.delete}>Delete</Button>
        </div>
    )
}

export default ExperienceItem
