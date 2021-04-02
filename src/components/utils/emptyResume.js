import { v4 as uuidv4 } from "uuid";

const emptyResume = {
  personalInfo: {
    fullName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    website: "",
    github: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      startDate: "",
      endDate: "",
    },
  ],
  project: [
    {
      id: uuidv4(),
      name: "",
      technology: "",
      description: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: "",
      degree: "",
      subject: "",
      startDate: "",
      endDate: "",
      relevant: "",
    },
  ],
};

export default emptyResume;