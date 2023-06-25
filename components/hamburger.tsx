import react from 'react';
import styles from '../styles/hamburger.module.css'
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

const HamburgerMenu = ({open, toggleOpen}) => {

    return (
        <div className={`${styles.hamburger} ${open ? styles.opened : ''}`} onClick={toggleOpen}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

const NavigationMenu = ({open, toggleOpen}) => {

    const router = useRouter();

    const handleHome = (e) => {
        e.preventDefault();
        toggleOpen();
        setTimeout(() => {
            router.push('/');
        }, 500);
    }

    const handleAbout = (e) => {
        e.preventDefault();
        toggleOpen();
        setTimeout(() => {
            router.push('/About');
        }, 500);
    }

    return (
        <div className={`${styles.navigationMenu} ${open ? styles.opened : ''}`}>
            <Link href="/" onClick={handleHome}>Accueil</Link>
            <Link href="/About" onClick={handleAbout}>A propos</Link>
        </div>
    )
}

export { HamburgerMenu, NavigationMenu };