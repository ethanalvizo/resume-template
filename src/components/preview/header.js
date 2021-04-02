import React from 'react'
import {
    Typography, 
    Grid,
    makeStyles
} from "@material-ui/core";
import { header as styles } from './styles';

const useStyles = makeStyles(styles);

const Header = ({ personalInfo }) => {
    const classes = useStyles();
    const { 
        fullName, 
        title, 
        email, 
        phoneNumber,
        website,
        github
    } = personalInfo;

    const isPhone = (phoneNumber != '') ? true : false;

    return (
        <header className={classes.root}>
            <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography className={classes.personal}>
                        {fullName}
                    </Typography>
                    <Typography className={classes.title}> {title} </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Typography className={classes.contact}>
                        {email}
                    </Typography>
                    {isPhone && <Typography className={classes.contact}>
                        ({phoneNumber.substring(0,3)}) {phoneNumber.substring(3,6)}-{phoneNumber.substring(6,10)}
                    </Typography>}
                    <Typography className={classes.contact}>
                        {website}
                    </Typography>
                    <Typography className={classes.contact}>
                        {github}
                    </Typography>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header
