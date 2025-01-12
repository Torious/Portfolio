import { useRef } from 'react';
import styles from '../styles/Home.module.css';
import morestyles from '../styles/Work.module.css';
import Link from 'next/link';
import HomeProject from './HomeProject';
import WorkProject from './WorkProject';
import Carousel, { CarouselItem } from "./Carousel";
import Experiences from './Experiences';
import Skills from './Skills';
import { projects } from '../Constants/projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { userinfo, ctaTexts, headings } from '../Constants/userinfo';
import Education from './Education';
import { AspectRatio } from '@chakra-ui/react';

const HomePage = ({ currentTheme }) => {
    const workHeadingRef = useRef(null);

    const handleScrollToWork = () => {
        const offset = -150; // Adjust the offset as needed
        const top = workHeadingRef.current.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2>
                
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.quote}</h2>
                <button
                    onClick={handleScrollToWork}
                    className={styles.cta1}
                    style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>
                    My Work
                </button>
                <a
                    href="/Nizar-ElJurdi-CV.pdf"
                    download="Nizar-ElJurdi-CV.pdf" // Suggested filename
                    className={styles.cta1}
                    style={{
                        backgroundColor: 'white',
                        color: currentTheme.contrastText,
                        boxShadow: currentTheme.boxShadow
                    }}
                >
                    My Resume
                </a>
                
            </div>
            <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
                <Skills currentTheme={currentTheme} />
            </div>
            <div>
                {userinfo.education.visible ? <Education currentTheme={currentTheme} /> : null}
            </div>
            <div>
                <div ref={workHeadingRef} id="workHeading" className={morestyles.workHeading} style={{ backgroundColor: currentTheme.secondary }}>
                    {headings.workMainPage}
                </div>
                <div className={morestyles.workmain} style={{ backgroundColor: currentTheme.secondary }}>
                    {projects.map((project, key) => (
                        <div key={key} data-aos='fade-up' >
                            <WorkProject currentTheme={currentTheme} project={project} id={key} />
                        </div>
                    ))}
                </div>
                {userinfo.experience.visible ? <Experiences currentTheme={currentTheme} /> : null}
            </div>
        </div>
    );
};

export default HomePage;
