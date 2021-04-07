import { v4 as uuidv4 } from "uuid";

const emptyResume = {
  personalInfo: {
    fullName: "Ethan Alvizo",
    title: "Full-Stack Developer",
    phoneNumber: "1234567890",
    email: "ethanalvizo@gmail.com",
    website: "ethanalvizo.github.io",
    github: "github.com/ethanalvizo",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Full-Stack Developer",
      company: "Betterworth",
      startDate: "Jan 2021",
      endDate: "Apr 2021",
      description: "-Created script to automate content flow from spreadsheet to application using Google Drive API and saving the company 2 days of work per content revision cycle \n-Developed social and notifications system using MongoDB",
    },
    {
        id: uuidv4(),
        position: "Front-End Developer",
        company: "IntelliCulture",
        startDate: "May 2020",
        endDate: "Aug 2020",
        description: "-Developed central portal to showcase products to potential investors/customers leading to an increase in sales pipeline of $200k annual recurring revenue \n-Designed dashboard for equipment and crop management using Bootstrap and jQuery \n-Created GPS tracking and course plotting for crop coverage tracking using Google Maps API",
      },
  ],
  project: [
    {
      id: uuidv4(),
      name: "Resume Creator",
      technology: "HTML/CSS/ReactJS/Material UI",
      description: "-Created a resume template that allows users to put in their own information",
    },
    {
        id: uuidv4(),
        name: "Exercise Tracker",
        technology: "MongoDB/Express.js/React.js/Node.js",
        description: "-Utilized MERN stack to create an exercise tracker with a fully functioning front and back end that logs multiple users’ physical activity and displays their weekly/monthly performance \n-Leveraged the Google Cloud Platform for storage of user data",
    },
    {
        id: uuidv4(),
        name: "Wellness Dashboard",
        technology: "HTML/CSS/JavaScript/Bootstrap",
        description: "-Designed customizable software to improve well being through tracking aspects of user’s life and maintain awareness of which areas they’re neglecting or patterns in their behaviour",
    },
    {
        id: uuidv4(),
        name: "Weather Notification System",
        technology: "Python/Arduino/Twilio",
        description: "-Created snow volume detector prototype to increase sources of weather information throughout a city to aid road maintenance decisions by municipal government in winter \n-Uses Twilio API for notifications and Arduino devices for snow volume and weight inputs",
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: "University of Waterloo",
      degree: "",
      subject: "Biomedical Engineering",
      startDate: "Sept 2019",
      endDate: " Apr 2024",
      relevant: "Data Structures and Algorithms, Object-Oriented Programming, Digital Computation, Human Factors in Design, Introduction to Design",
    },
  ],
};

export default emptyResume;