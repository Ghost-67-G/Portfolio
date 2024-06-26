import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'React Boilerplate',
        description: "This React Boilerplate project is designed to provide a robust and scalable starting point for React applications. It incorporates Clerk for authentication, Tailwind for styling, Redux Toolkit for state management, and Flowbite for UI components. The boilerplate also features a global model setup to streamline state and data management across the application.",
        tools: ['React', 'Clerk', 'Tailwind', 'Redux Toolkit', 'Flowbite', 'Global Model'],
        role: '',
        code: 'https://github.com/Ghost-67-G/React-Boilerplate',
        demo: '',
        image: crefin,
    },    
    {
        id: 2,
        name: 'Node Express Boilerplate',
        description: 'This Node Express Boilerplate project utilizes different branches to support various stacks. The firebase branch integrates Firebase with MongoDB, while the firebase_postgresql branch incorporates Prisma with PostgreSQL and Firebase. The application features Express for backend development, Passport for authentication, Joi for validation, and Mongoose for MongoDB modeling. Docker is used for containerization, ESLint for code quality, and Nodemailer for email functionality.',
        tools: ['Express', 'Passport', 'Joi', 'Wisdom', 'Cross Env', 'Cors', 'Docker', 'ESLint', 'Mongoose', 'PostgreSQL', 'Nodemailer', 'Nodemon', 'Prisma', 'Firebase'],
        role: '',
        code: 'https://github.com/Ghost-67-G/node-express-boilerplate',
        demo: '',
        image: travel,
    },    
    {
        id: 3,
        name: 'Chit Chat App',
        description: 'The Chit Chat App is a comprehensive chat application built to demonstrate modern web development practices. My team used React for the frontend, styled with TailwindCSS to create a responsive and intuitive UI. Firebase was integrated for real-time database and authentication solutions. ESLint was utilized to maintain code quality and consistency. This project showcases efficient state management, real-time messaging, and seamless user experience.',
        tools: ['React', 'Tailwind', 'Firebase', 'ESLint'],
        code: 'https://github.com/Ghost-67-G/firebase-chat',
        role: '',
        demo: '',
        image: realEstate,
    }

    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: '',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },