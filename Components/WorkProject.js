import styles from '../styles/Work.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import { HStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react";
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

  const arrowColor = project.carouselType === 'mobile' ? 'black' : 'white';

  // Determine the device type based on carouselType
  const deviceType = project.carouselType === 'mobile' ? 'Galaxy Note 8' : 'MacBook Pro';

  return (
    <div
      className={styles.parentofparentcard}
      style={{ justifyContent: id % 2 === 0 ? 'flex-start' : 'flex-end' }}
    >
      <div className={styles.parentcard}>
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}>{project.name}</h1>
          <HStack spacing={2}>
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

        <div className={styles.imageandsocials}>
          <DeviceFrameset device={deviceType} color="black">
            <div
              className={styles.card}
              {...handlers}
              style={{
                borderColor: currentTheme.footerColor,
                position: 'relative',
                width: '100%',
                height: '100%',
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
          </DeviceFrameset>
          <div>
            <Tooltip label="Github link" placement="right">
              <div className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
                {project.githubLink !== '' ? <Link href={project.githubLink} legacyBehavior><a><FontAwesomeIcon icon={faGithubAlt} /></a></Link> : <FontAwesomeIcon icon={faGithubAlt} onClick={showGitToast} />}
              </div>
            </Tooltip>
            <Tooltip label="Project link" placement="right">
              <div className={styles.socialIcon} style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}>
                {project.projectLink !== '' ? <Link href={project.projectLink} legacyBehavior><a><FontAwesomeIcon icon={faTelegramPlane} /></a></Link> : <FontAwesomeIcon icon={faTelegramPlane} onClick={showProjToast} />}
              </div>
            </Tooltip>
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
