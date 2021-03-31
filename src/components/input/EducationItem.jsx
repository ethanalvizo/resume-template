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
                name="university"
                placeholder="University"
                value={educationItem.university}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="degree"
                placeholder="Degree"
                value={educationItem.degree}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="subject"
                placeholder="Subject"
                value={educationItem.subject}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="startDate"
                placeholder="Start Date"
                value={educationItem.startDate}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="endDate"
                placeholder="End Date"
                value={educationItem.endDate}
                fullWidth={true}
            />
            <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
    )
}

export default EducationItem
