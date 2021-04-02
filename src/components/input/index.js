import React from 'react'
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import {
    Grid,
    Button,
    makeStyles,
    Card
} from "@material-ui/core";
import { formWrapper as styles } from "./styles";

const useStyles = makeStyles(styles);

const Index = ({
    resume,
    onChangePersonal,
    onChangeExperience,
    onAddExperience,
    onDeleteExperience,
    onChangeProject,
    onAddProject,
    onDeleteProject,
    onChangeEducation,
    onAddEducation,
    onDeleteEducation,
    onPrint,
    onLoadExample,
    onReset,
}) => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.form}>
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
                <Project 
                    project={resume.project}
                    onChange={onChangeProject}
                    onAdd={onAddProject}
                    onDelete={onDeleteProject}
                />
                <Education 
                    education={resume.education}
                    onChange={onChangeEducation}
                    onAdd={onAddEducation}
                    onDelete={onDeleteEducation}
                />
                <Button onClick={onPrint} fullWidth={true} className={classes.print}>Generate PDF</Button>
                <Button onClick={onLoadExample} fullWidth={true} className={classes.load}>Load Sample</Button>
                <Button onClick={onReset} fullWidth={true} className={classes.reset}>Reset</Button>
            </Card>
        </div>
    )
}

export default Index;
