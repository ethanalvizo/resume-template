import React from 'react';
import { 
    Grid,
    Input,
    Typography,
    makeStyles
} from '@material-ui/core';

import { personal as styles } from "./styles";

const useStyles = makeStyles(styles);

const Personal = ({ personalInfo, onChange }) => {
    const classes = useStyles();
    return (
        <Grid>
            <Typography className={classes.title}>Personal Information</Typography>
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={personalInfo.firstName}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={personalInfo.lastName}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="title"
                placeholder="Title"
                value={personalInfo.title}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                maxlength="10"
                name="phoneNumber"
                placeholder="Phone Number"
                value={personalInfo.phoneNumber}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="email"
                placeholder="Email"
                value={personalInfo.email}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="website"
                placeholder="Website"
                value={personalInfo.website}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="github"
                placeholder="Github"
                value={personalInfo.github}
                fullWidth={true}
                className={classes.input}
                disableUnderline={true}
            />
        </Grid>
    )
}

export default Personal