import styles from '../styles/NavbarFooter.module.css';
import morestyles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userinfo } from '../Constants/userinfo';
import Link from 'next/link';


const Footer = ({ currentTheme }) => {

    const iconStyles = {
        backgroundColor: currentTheme.tertiary,
        color: '#101010',
        boxShadow: currentTheme.boxShadow,
    }

    return (
        <div
            className={styles.footermain}
            style={{
                textAlign: 'center',
                backgroundColor: currentTheme.footerColor,
                color: currentTheme.subtext,
            }}
        >
            <ul className={styles.footerList}>
                {/* Social Links */}
                <div className={morestyles.socialIconDiv}>
                    {userinfo.socials ?
                        userinfo.socials.map((social, key) => {
                            return (
                                <div className={morestyles.socialIcon} style={iconStyles} key={key}>
                                    <Link href={social.link} legacyBehavior><a><FontAwesomeIcon icon={social.icon} /></a></Link>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </ul>

            {/* Contact Information */}

            <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
                <Link
                    href={`mailto:${userinfo.contact.email ? userinfo.contact.email.toLowerCase() : ''}`}
                    legacyBehavior
                >
                    <a style={{ textTransform: 'lowercase' }}>
                        {userinfo.contact.email?.toLowerCase()}
                    </a>
                </Link>
            </div>
            {userinfo.contact.phone ? (
                <div
                    style={{
                        textAlign: 'center',
                        paddingTop: '0.2rem',
                        color: currentTheme.tertiary,
                    }}
                >
                    <Link href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`} legacyBehavior>
                        <a>{`${userinfo.contact.countrycode}${userinfo.contact.phone}`}</a>
                    </Link>
                </div>
            ) : null}


        </div>
    );
};

export default Footer;
