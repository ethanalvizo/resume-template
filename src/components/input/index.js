import React from 'react'
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
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
    onChangeEducation,
    onAddEducation,
    onDeleteEducation,
    onPrint,
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
                <Education 
                    education={resume.education}
                    onChange={onChangeEducation}
                    onAdd={onAddEducation}
                    onDelete={onDeleteEducation}
                />
                <Button onClick={onPrint} fullWidth={true} className={classes.print}>Generate PDF</Button>
                <Button onClick={onReset} fullWidth={true} className={classes.reset}>Reset</Button>
            </Card>
        </div>
    )
}

export default Index;
