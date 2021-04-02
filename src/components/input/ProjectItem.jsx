import React from 'react';
import { 
    Grid,
    Button,
    Input,
    makeStyles,
} from '@material-ui/core';
import { project as styles } from "./styles";

const useStyles = makeStyles(styles);

const ProjectItem = ({ id, projectItem, onChange, onDelete }) => {
    const classes = useStyles();
    return (
        <div>
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="name"
                placeholder="Name"
                value={projectItem.name}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="technology"
                placeholder="Technologies"
                value={projectItem.technology}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="description"
                placeholder="Description"
                value={projectItem.description}
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

export default ProjectItem
