// import project demo images as follows.
import PROJECTA_1 from '../styles/projects/ProjectA_1.jpg';
import PROJECTA_2 from '../styles/projects/ProjectA_2.jpg';
import PROJECTA_3 from '../styles/projects/ProjectA_3.jpg';
import PROJECTA_4 from '../styles/projects/ProjectA_4.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Blabrm0uth', //project name
        description: 'Blabrm0uth is a web application that generates captions, summaries, and answers questions about YouTube videos.', //project description
        githubLink: 'https://github.com/Torious/Blabrm0uth', //github repo link
        projectLink: 'https://blabrm0uth.herokuapp.com/', //deployed project link
        tech: ['React', 'Django'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECTA_1, PROJECTA_2, PROJECTA_3, PROJECTA_4], //list of names of images from above imports.
    },
    {
        name: 'BudgetLens', //project name
        description: 'Blabrm0uth is a web application that generates captions, summaries, and answers questions about YouTube videos.', //project description
        githubLink: 'https://github.com/Torious/Blabrm0uth', //github repo link
        projectLink: 'https://blabrm0uth.herokuapp.com/', //deployed project link
        tech: ['React', 'Django'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECTA_1, PROJECTA_2, PROJECTA_3, PROJECTA_4], //list of names of images from above imports.
    },
]
