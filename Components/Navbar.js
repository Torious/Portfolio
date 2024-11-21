import { Switch } from "@chakra-ui/react"
import styles from '../styles/NavbarFooter.module.css'
import morestyles from '../styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navlinks from './Navlinks'
import { useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { userinfo } from '../Constants/userinfo'


const Navbar = ({ toggleTheme, currentTheme }) => {
    const [drawerVisible] = useMediaQuery("(max-width: 950px)")
    const [sticky, setSticky] = useState(false)

    const iconStyles = {
        backgroundColor: currentTheme.tertiary,
        color: '#101010',
        boxShadow: currentTheme.boxShadow,
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow, position: sticky ? 'fixed' : 'static' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', marginBottom: !drawerVisible ? '0' : '10px' }}>
                <Link href='/' legacyBehavior><a><h2 className={styles.logo}>{userinfo.logoText}</h2></a></Link>
                {!drawerVisible
                    ? <div style={{ display: 'flex' }}>

                    </div>
                    : null
                }
                
            </div>

            {drawerVisible
                ? <>
                    <hr></hr>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                        <Navlinks />
                    </div>
                </>
                : null
            }
        </div>
    )
}

export default Navbar
