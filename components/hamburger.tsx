import react from 'react';
import styles from '../styles/hamburger.module.css'
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { Instagram } from 'react-feather';

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

    const handleNav = (e) => {
        e.preventDefault();
        toggleOpen();
        setTimeout(() => {
            router.push(e.target.pathname);
        }, 500);
    }

    return (
        <div className={`${styles.navigationMenu} ${open ? styles.opened : ''}`}>
            <Link href="/" onClick={handleNav}>Accueil</Link>
            <Link href="/About" onClick={handleNav}>A propos</Link>
            <div className='flex flex-col items-end pr-1 mt-5 mr-5 border-r-4 border-gray-300'>
                <span className='mr-5'>Dernières publications</span>
                <Link href="/posts/a-la-une" onClick={handleNav}>A la une</Link>
                <Link href="/posts/liberte-captive" onClick={handleNav}>Liberté captive</Link>
                <Link href="/posts/minimalisme-floral" onClick={handleNav}>Minimalisme floral</Link>
                <Link href="/posts/shooting-3d" onClick={handleNav}>Shooting en 3D</Link>
                <Link href="/posts/singapour" onClick={handleNav}>Singapour</Link>
            </div>
            <div className='flex flex-col items-end pr-1 mt-5 mr-5 border-r-4 border-gray-300'>
                <span className='mr-5'>Social</span>
                <a href="https://instagram.com/ephemeremagazine2023" onClick={handleNav}><Instagram size={"35px"} /></a>   
            </div>
        </div>
    )
}

export { HamburgerMenu, NavigationMenu };