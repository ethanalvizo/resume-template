import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import styles from './styles';

import {
    Grid,
    Typography,
    makeStyles
} from "@material-ui/core";


export default class index extends Component {
    render() {
        const { resume } = this.props

        return (
            <Grid>
                <Header personalInfo={resume.personalInfo} />
                <Content 
                    personalInfo={resume.personalInfo}
                    experience={resume.experience}
                    education={resume.education}
                />
            </Grid>
        )
    }
}
