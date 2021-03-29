import React from 'react';
import { 
    Grid,
    Button,
    Input,
} from '@material-ui/core';

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
    return (
        <div>
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="position"
                placeholder="Position"
                value={experienceItem.position}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="company"
                placeholder="Company"
                value={experienceItem.company}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="startDate"
                placeholder="Start Date"
                value={experienceItem.startDate}
                fullWidth={true}
            />
            <Input
                onChange={(e) => onChange(e,id)}
                type="text"
                name="endDate"
                placeholder="End Date"
                value={experienceItem.endDate}
                fullWidth={true}
            />
            {/* To do: Allow them to add description for their job role*/}
            <Button onClick={() => onDelete(id)}>Delete</Button>
        </div>
    )
}

export default ExperienceItem
