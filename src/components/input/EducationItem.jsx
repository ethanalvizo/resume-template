import React from 'react';
import { 
    Grid,
    Button,
    Input,
} from '@material-ui/core';

const EducationItem = ({ id, educationItem, onChange, onDelete }) => {
    return (
        <div>
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="universityName"
                placeholder="University"
                value={educationItem.universityName}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="degree"
                placeholder="Degree"
                value={educationItem.degree}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="subject"
                placeholder="Subject"
                value={educationItem.universityName}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="startDate"
                placeholder="Start Date"
                value={educationItem.startDate}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="endDate"
                placeholder="endDate"
                value={educationItem.endDate}
            />
            <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
    )
}

export default EducationItem
