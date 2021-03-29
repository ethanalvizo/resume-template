import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from "uuid"
import { useReactToPrint } from "react-to-print";
import Input from "./input";
import emptyResume from "./utils/emptyResume";


const Main = () => {
    const [resume, setResume] = useState(emptyResume);

    const handleChangePersonal = (e) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            handleChangeFile(e);
            return;
        }

        setResume((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name] : value,
            },
        }));

    };

    const handleChangeFile = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        if(!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setResume((prevState) => ({
                ...prevState,
                personalInfo: {
                    ...prevState.personalInfo,
                    [name]: reader.result,
                },
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleChangeExperience = (e, id) => {
        const { name, value } = e.target;

        setResume((prevState) => {
            const newExperience = prevState.experience.map((experienceItem) => {
                if (experienceItem.id === id) {
                    return { ...experienceItem, [name]: value};
                }
                return experienceItem;
            });
            return { ...prevState, experience: [...newExperience] };
        });
    };

    const handleAddExperience = () => {
        setResume((prevState) => ({
            ...prevState,
            experience: [
                ...prevState.experience,
                {
                    id: uuidv4(),
                    position: "",
                    company: "",
                    startDate: "",
                    endDate: "",
                }
            ]
        }))
    };

    const handleDeleteExperience = (id) => {
        setResume((prevState) => {
            const newExperience = prevState.experience.filter(
                (experienceItem) => experienceItem.id !== id
            );

            return { ...prevState, experience: [...newExperience] };
        })
    }

    const handleChangeEducation = (e,id) => {
        const { name, value } = e.target;

        setResume((prevState) => {
            const newEducation = prevState.education.map((educationItem) => {
                if (educationItem.id === id) {
                    return { ...educationItem, [name]: value};
                }
                return educationItem;
            });
            return { ...prevState, education: [...newEducation] };
        });
    };

    const handleAddEducation = () => {
        setResume((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: uuidv4(),
                    university: '',
                    degree: '',
                    subject: '',
                    startDate: '',
                    endDate: '',
                },
            ],
        }));
    }

    const handleDeleteEducation = (id) => {
        setResume((prevState) => {
            const newEducation = prevState.education.filter(
                (educationItem) => educationItem.id !== id
            );
            return { ...prevState, education: [...newEducation] };
        })
    };

    const handleReset = () => {
        setResume(emptyResume);
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({ content: () => componentRef.current });

    return (
        <div>
            <Input 
                resume={resume}
                onChangePersonal={handleChangePersonal}
                onChangeExperience={handleChangeExperience}
                onAddExperience={handleAddExperience}
                onDelete={handleDeleteExperience}
                onChangeEducation={handleChangeEducation}
                onAddEducation={handleAddEducation}
                onDeleteEducation={handleDeleteEducation}
                onPrint={handlePrint}
                onReset={handleReset}
            />
        </div>
    )
}

export default Main;
