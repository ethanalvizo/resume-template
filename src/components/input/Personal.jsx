import React from 'react';
import { 
    Grid,
    Input,
    Typography,
} from '@material-ui/core';

const Personal = ({ personalInfo, onChange }) => {
    return (
        <Grid>
            <Typography>Personal Information</Typography>
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={personalInfo.firstName}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={personalInfo.lastName}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="title"
                placeholder="Title"
                value={personalInfo.title}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={personalInfo.phoneNumber}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e)}
                type="text"
                name="email"
                placeholder="Email"
                value={personalInfo.email}
                fullWidth={true}
            />
        </Grid>
    )
}

export default Personal