import Link from 'next/link'
import { HamburgerMenu, NavigationMenu } from './hamburger'
import { useState } from 'react'
import { useRouter } from 'next/router';

const Header = () => {

  const [hamburgerOpened, setHambergerOpened] = useState(false);
  const router = useRouter();

  const toggleOpen = () => {
    setHambergerOpened(!hamburgerOpened);
  }

  const handleHome = (e) => {
    if(!hamburgerOpened) return;
    
    e.preventDefault();
    toggleOpen();
    setTimeout(() => {
      router.push('/');
    }, 500);
  }

  return (
    <>
    <div className='flex flex-row items-center justify-between mt-12 mb-12'>
      <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline" onClick={handleHome}>
          EPHEMERE
        </Link>
      </h2>
      <HamburgerMenu open={hamburgerOpened} toggleOpen={toggleOpen} />
    </div>
    <NavigationMenu open={hamburgerOpened} toggleOpen={toggleOpen}/>
    </>
  )
}

export default Header
