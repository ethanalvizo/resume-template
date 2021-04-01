import { v4 as uuidv4 } from "uuid";

const exampleCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
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
  education: [
    {
      id: uuidv4(),
      university: "",
      degree: "",
      subject: "",
      startDate: "",
      endDate: "",
    },
  ],
};

export default exampleCV;