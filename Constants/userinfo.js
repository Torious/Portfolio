//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faEnvelope, faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"
import potechLogo from '../public/potech.png';

export const userinfo = {
    logoText: "Nizar El Jurdi", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'nizareljurdi@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '4389794449', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+1' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/Torious', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/nizareljurdi/', icon: faLinkedinIn },
        { type: 'instagram', link: 'https://www.instagram.com/jurdee/', icon: faInstagram },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I'm Nizar.",
        subtitle: "A Full Stack Developer with a Software Engineering degree from Concordia University, Montreal. Growing up both Lebanese and Ukrainian has provided me with a unique perspective towards different cultures and life. Ready to turn coffee into code together?"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Soft Skills",
            skills: ["Creative", "Fast Learner", "Emotionally Intelligent", "Intuitive"]
        },
        {
            category: "Languages", // eg.frontend, backend, devops etc
            skills: ["Python", "JavaScript", "Java/Kotlin", "C++"] //eg. react, html, python etc.
        },
        {
            category: "Frameworks",
            skills: ["Django", "React", "Node", "Spring Boot"]
        },
        
        {
            category: "Languages",
            skills: ["English(Fluent)", "Arabic(Fluent)", "Russian(Conversational)", "French(Beginner)"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "",
        resume: "https://docs.google.com/document/d/1oesDY6KtSlZpp_juqJn7wj4dZKoQ5Nqo1zm95Qi49pQ/edit?usp=sharing" //link your resume here. it can be drive link or any other link
},
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Childhood - June 2017', //timespan
                title: 'High School Degree', //eg. BTech in Compuster Engineering
                organization: 'SABIS, Choueifat, Lebanon', //eg. VJTI, Mumbai
                description: 'Lebanese Baccalaureate in General Sciences, 81st in the country.' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'Sept 2017 - June 2023',
                title: 'Bacherlors of Software Engineering',
                organization: 'Concordia University, Gina Cody School of Engineering, Montreal, Canada',
                description: ''
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'potech', //company name eg.Microsoft
                companylogo: 'potech.png', //companylogo
                position: 'Full-Stack Developer', //post you held eg.Senior SDE
                time: 'April 2024 - September 2024', //timespan
                description: 'The Generative UI Prototype is an innovative web application that allows users to create, manage, and dynamically update Next.js projects using natural language processing and AI-driven code generation. The system provides a user-friendly interface for creating new projects, editing existing ones, and leveraging AI to make changes to the codebase based on user requests.' //eg. spearheaded the graphics team in designing SASS product UIs
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}