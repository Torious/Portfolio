import styles from '../styles/Work.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import { AspectRatio, HStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from "react-swipeable";
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';  // Import styles for device frames

const WorkProject = ({ currentTheme, project, id }) => {
  const toast = useToast();
  const [index, setIndex] = useState(0);

  const showGitToast = () => {
    toast({
      description: "Sorry, this project has a private repository!",
      status: "info",
      isClosable: true,
    });
  };

  const showProjToast = () => {
    toast({
      description: "Sorry, this project has not been deployed yet!",
      status: "info",
      isClosable: true,
    });
  };

  const ahead = () => {
    setIndex(index === project.photo.length - 1 ? 0 : index + 1);
  };

  const back = () => {
    setIndex(index === 0 ? project.photo.length - 1 : index - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => ahead(),
    onSwipedRight: () => back(),
  });

  const arrowColor = project.arrowColor

  return (
    <div
      className={styles.parentofparentcard}
    >
      <div className={styles.parentcard} >
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}styles>{project.name}</h1>
          <HStack spacing={1}>
            {project.tech.map((tech) => (
              <Tag
                key={tech}
                size="sm"
                borderRadius="md"
                variant="subtle"
                colorScheme={currentTheme.name === 'light' ? 'cyan' : 'purple'}
              >
                <TagLabel>{tech}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </div>
        {/* Apply conditional class based on carouselType */}
        <div
          className={`${styles.imageandsocials} ${project.carouselType === 'desktop' ? styles.desktopImageAndSocials : styles.mobileImageAndSocials
            }`}
        >

          {/* Apply conditional classes to the card */}
          <div
            className={`${styles.card} ${project.carouselType === 'desktop' ? styles.desktopCard : styles.mobileCard
              }`}
            {...handlers}
            style={{
              borderColor: currentTheme.footerColor,
              position: 'relative',
            }}
          >
            <Image
              src={project.photo[index]}
              alt="thumbnail image"
              layout="fill"
              objectFit="cover"
            />
            <button
              onClick={back}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                color: arrowColor,
                fontSize: '20px',
              }}
            >
              &lt;
            </button>
            <button
              onClick={ahead}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                color: arrowColor,
                fontSize: '20px',
              }}
            >
              &gt;
            </button>
          </div>
          <div>
            <Tooltip label="Github link" placement="right">
              <div className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
                {project.githubLink !== '' ? <Link href={project.githubLink} legacyBehavior><a><FontAwesomeIcon icon={faGithubAlt} /></a></Link> : <FontAwesomeIcon icon={faGithubAlt} onClick={showGitToast} />}
              </div>
            </Tooltip>
            {project.projectLink && (
              <Tooltip label="Project link" placement="right">
                <div
                  className={styles.socialIcon}
                  style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}
                >
                  <Link href={project.projectLink} legacyBehavior>
                    <a>
                      <FontAwesomeIcon icon={faTelegramPlane} />
                    </a>
                  </Link>
                </div>
              </Tooltip>
            )}

          </div>
        </div>
        <div className={styles.cardbottom}>
          <p className={styles.projdescription}>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProject;
