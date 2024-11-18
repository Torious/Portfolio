// import project demo images as follows.
import PROJECTA_1 from '../styles/projects/ProjectA_1.jpg';
import PROJECTA_2 from '../styles/projects/ProjectA_2.jpg';
import PROJECTA_3 from '../styles/projects/ProjectA_3.jpg';
import PROJECTA_4 from '../styles/projects/ProjectA_4.jpg';
import PROJECTA_5 from '../styles/projects/ProjectA_5.jpg';
import BUDGET0 from '../styles/projects/0.png';
import BUDGET1 from '../styles/projects/1.png';
import BUDGET2 from '../styles/projects/2.png';
import BUDGET3 from '../styles/projects/3.png';
import BUDGET4 from '../styles/projects/4.png';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    {
        name: 'Blabrm0uth',
        description: 'Blabrm0uth is a web application that generates captions...',
        githubLink: 'https://github.com/Torious/Blabrm0uth',
        projectLink: 'https://blabrm0uth.herokuapp.com/',
        tech: ['React', 'Django'],
        photo: [PROJECTA_1, PROJECTA_2, PROJECTA_3, PROJECTA_4, PROJECTA_5],
        carouselType: 'desktop', // or 'mobile'
    },
    {
        name: 'Budget Lens',
        description: 'BudgetLens is a budgeting application...',
        githubLink: 'https://github.com/Torious/BudgetLensLandingPage',
        projectLink: 'https://blabrm0uth.herokuapp.com/',
        tech: ['Kotlin', 'Django'],
        photo: [BUDGET0, BUDGET1, BUDGET2, BUDGET3, BUDGET4],
        carouselType: 'mobile', // specify mobile carousel
    },
];

