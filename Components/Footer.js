import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'

const Footer = ({ currentTheme }) => {
    return (
        <div className={styles.footermain} style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}>
            <div className={styles.footertable}>
                <ul><li>
                    <Link href='/' legacyBehavior><a><h2 className={styles.footerlogo}>{userinfo.logoText}</h2></a></Link>
                </li>
                    <li><div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
                        <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email.toLowerCase() : ''}`} legacyBehavior>
                        <a style={{ textTransform: 'lowercase' }}>{userinfo.contact.email?.toLowerCase()}</a>
                        </Link>
                    </div>
                        {
                            userinfo.contact.phone ?
                                <div style={{ textAlign: 'center', paddingTop: '0.2rem', color: currentTheme.tertiary }}>
                                    <Link href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`} legacyBehavior><a>{`${userinfo.contact.countrycode}${userinfo.contact.phone}`}</a></Link>
                                </div> : null
                        }</li>
                </ul>
                <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {userinfo.socials ?
                        userinfo.socials.map((social, key) => {
                            return (
                                <Link href={social.link} key={key} legacyBehavior><a><li>{social.type}</li></a></Link>
                            )
                        }) : null
                    }
                    <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`} legacyBehavior><a><li>Mail</li></a></Link>
                </ul>
                <ul>
                    <li className={styles.listHeading}>Pages</li>
                    <Link href='/' legacyBehavior><a><li>Home</li></a></Link>
                    <Link href='/#about' legacyBehavior><a><li>About</li></a></Link>
                    <Link href='/work' legacyBehavior><a><li>Work</li></a></Link>
                    <Link href='/contact' legacyBehavior><a><li>Contact</li></a></Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer
