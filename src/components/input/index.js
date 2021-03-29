import React from 'react'
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import {
    Grid,
    Button,
    makeStyles,
} from "@material-ui/core";
import { formWrapper as styles } from "./styles";

const useStyles = makeStyles(styles);

const Index = ({
    resume,
    onChangePersonal,
    onChangeExperience,
    onAddExperience,
    onDeleteExperience,
    onChangeEducation,
    onAddEducation,
    onDeleteEducation,
    onPrint,
    onReset,
}) => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.form}>
                <Personal 
                    personalInfo={resume.personalInfo} 
                    onChange={onChangePersonal} 
                />
                <Experience 
                    experience={resume.experience}
                    onChange={onChangeExperience}
                    onAdd={onAddExperience}
                    onDelete={onDeleteExperience}
                />
                <Education 
                    education={resume.education}
                    onChange={onChangeEducation}
                    onAdd={onAddEducation}
                    onDelete={onDeleteEducation}
                />
                <Button onClick={onPrint}>Generate PDF</Button>
                <Button onClick={onReset}>Reset</Button>
            </Grid>
        </div>
    )
}

export default Index;
