// import project demo images as follows.
import PROJECTA_1 from '../styles/projects/ProjectA_1.jpg';
import PROJECTA_2 from '../styles/projects/ProjectA_2.jpg';
import PROJECTA_3 from '../styles/projects/ProjectA_3.jpg';
import PROJECTA_4 from '../styles/projects/ProjectA_4.jpg';
import PROJECTA_5 from '../styles/projects/ProjectA_5.jpg';
import PROJECTB_1 from '../styles/projects/ProjectB_1.jpg';
import PROJECTB_2 from '../styles/projects/ProjectB_2.jpg';
import PROJECTB_3 from '../styles/projects/ProjectB_3.jpg';
import PROJECTB_4 from '../styles/projects/ProjectB_4.jpg';
import PROJECTB_5 from '../styles/projects/ProjectB_5.jpg';
import PROJECTB_6 from '../styles/projects/ProjectB_6.jpg';
import BUDGET0 from '../styles/projects/0.png';
import BUDGET1 from '../styles/projects/1.png';
import BUDGET2 from '../styles/projects/2.png';
import BUDGET3 from '../styles/projects/3.png';
import BUDGET4 from '../styles/projects/4.png';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    {
        name: 'Budget Lens',
        description: 'BudgetLens is a mobile app for digital receipt storage and splitting expenses with friends.',
        githubLink: 'https://github.com/Torious/BudgetLensLandingPage',
        tech: ['Kotlin', 'Django'],
        photo: [BUDGET0, BUDGET1, BUDGET2, BUDGET3, BUDGET4],
        carouselType: 'mobile', // specify mobile carousel
    },
    {
        name: 'Blabrm0uth',
        description: 'Blabrm0uth is a web application that generates captions, summaries, and answers questions about YouTube videos.',
        githubLink: 'https://github.com/Torious/Blabrm0uth',
        projectLink: 'https://blabrm0uth.herokuapp.com/',
        tech: ['React', 'Django'],
        photo: [PROJECTA_1, PROJECTA_2, PROJECTA_3, PROJECTA_4, PROJECTA_5],
        carouselType: 'desktop', // or 'mobile'
    },
    {
        name: 'HelpMePass',
        description: 'Static website for UI/UX project',
        githubLink: 'https://github.com/Torious/HelpMepass',
        tech: ['Bootstrap Studio'],
        photo: [PROJECTB_1, PROJECTB_2, PROJECTB_3, PROJECTB_4, PROJECTB_5, PROJECTB_6],
        carouselType: 'desktop', // or 'mobile'
    },
];

