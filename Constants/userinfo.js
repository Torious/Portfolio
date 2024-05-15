//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

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
        title: "Hey there, I am Nizar.",
        subtitle: "Nizar is a Junior Software Engineer and Full-Stack Developer from Montreal, QC, with a Bachelor in Software Engineering from Concordia University. Always ready to learn and take on new challenges, Nizar is keen on making meaningful contributions through his work."
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
            skills: ["English(Fluent)", "Arabic(Fluent)", "Russian(Spoken)", "French(Beginner)"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Known for his positive attitude, bringing a smile to everyone's face while diligently working to solve problems with creativity and persistence. Passionate about technology, he enjoys building applications that simplify and enrich people's lives. With skills in Python, JavaScript, Django, and React, Nizar creates applications that are intuitive and user-friendly.",
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
                description: 'GPA 3.0'
            },
        ],
    },
    experience: {
        visible: false, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Dunder Mifflin', //company name eg.Microsoft
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
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