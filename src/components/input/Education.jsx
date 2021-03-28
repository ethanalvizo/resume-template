import React from 'react';
import EducationItem from "./EducationItem";

import { 
    Grid,
    Button
} from '@material-ui/core';



const Education = ({ education, onChange, onAdd, onDelete }) => {
    const educationItems = education.map((educationItem) => (
        <EducationItem 
            key={educationItem.id}
            id={educationItem.id}
            educationItem={educationItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))

    return (
        <Grid>
            {educationItems}
            <Button onClick={onAdd}>Add</Button>
        </Grid>
    )
}

export default Education;
