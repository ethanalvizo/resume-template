import React from 'react';
import { 
    Grid,
    Button,
    Input,
    makeStyles,
    TextField
} from '@material-ui/core';
import { education as styles} from "./styles";

const useStyles = makeStyles(styles);

const EducationItem = ({ id, educationItem, onChange, onDelete }) => {
    const classes = useStyles();

    return (
        <div>
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="university"
                placeholder="University"
                value={educationItem.university}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            {/* <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="degree"
                placeholder="Degree"
                value={educationItem.degree}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            /> */}
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="subject"
                placeholder="Subject"
                value={educationItem.subject}
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
                        value={educationItem.startDate}
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
                        value={educationItem.endDate}
                        fullWidth={true}
                        className={classes.input}
                        disableUnderline={true}
                    />
                </Grid>
            </Grid>
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="relevant"
                placeholder="Relevant Courses/Concepts"
                value={educationItem.relevant}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Button onClick={() => onDelete(id)} fullWidth={true} className={classes.delete}>Delete</Button>
        </div>
    )
}

export default EducationItem
