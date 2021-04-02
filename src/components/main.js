import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"
import { useReactToPrint } from "react-to-print";
import Input from "./input";
import Preview from "./preview";
import emptyResume from "./utils/emptyResume";
import sampleResume from "./utils/exampleResume";
import styles from "./styles";
import WebFont from 'webfontloader';

import {
    Grid,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(styles);


const Main = () => {
    const [resume, setResume] = useState(emptyResume);
    const classes = useStyles();

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Nanum Gothic']
            }
        });
    }, []);

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

    const handleChangeProject = (e, id) => {
        const { name, value } = e.target;

        setResume((prevState) => {
            const newProject = prevState.project.map((projectItem) => {
                if (projectItem.id === id) {
                    return { ...projectItem, [name]: value};
                }
                return projectItem;
            });
            return { ...prevState, project: [...newProject] };
        });
    };

    const handleAddProject = () => {
        setResume((prevState) => ({
            ...prevState,
            project: [
                ...prevState.project,
                {
                    id: uuidv4(),
                    name: "",
                    technology: "",
                    description: "",
                }
            ]
        }))
    };

    const handleDeleteProject = (id) => {
        setResume((prevState) => {
            const newProject = prevState.project.filter(
                (projectItem) => projectItem.id !== id
            );

            return { ...prevState, project: [...newProject] };
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

    const handleLoadExample = () => {
        setResume(sampleResume)
    }

    const handleReset = () => {
        setResume(emptyResume);
    }

    const componentRef = useRef();
    
    const handlePrint = useReactToPrint({ content: () => componentRef.current });

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Grid container justify="space-evenly">
                    <Grid item md={4} lg ={4} xl={5} className={classes.form}>
                        <Input 
                            resume={resume}
                            onChangePersonal={handleChangePersonal}
                            onChangeExperience={handleChangeExperience}
                            onAddExperience={handleAddExperience}
                            onDeleteExperience={handleDeleteExperience}
                            onChangeProject={handleChangeProject}
                            onAddProject={handleAddProject}
                            onDeleteProject={handleDeleteProject}
                            onChangeEducation={handleChangeEducation}
                            onAddEducation={handleAddEducation}
                            onDeleteEducation={handleDeleteEducation}
                            onPrint={handlePrint}
                            onLoadExample={handleLoadExample}
                            onReset={handleReset}
                        />
                    </Grid>
                    <Grid item md={6} lg ={6} xl={5} className={classes.preview}>
                        <Preview resume={resume} ref={componentRef} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Main;
