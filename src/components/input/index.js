import React from 'react'
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

import {
    Button
} from "@material-ui/core";

const index = ({
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
    return (
        <div>
            <Education 
                education={resume.education}
                onChange={onChangeEducation}
                onAdd={onAddEducation}
                onDelete={onDeleteEducation}
            />
            <Button onClick={onPrint}>Generate PDF</Button>
        </div>
    )
}

export default index;
