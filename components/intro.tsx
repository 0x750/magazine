import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'
import { HamburgerMenu, NavigationMenu } from './hamburger'
import { useState } from 'react'

const Intro = () => {

  const [hamburgerOpened, setHambergerOpened] = useState(false);

  const toggleOpen = () => {
    setHambergerOpened(!hamburgerOpened);
  }

  return (
    <>
      <section className="flex flex-row items-center justify-between mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
        <div className="flex flex-col items-baseline">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
            EPHEMERE
          </h1>
          <h4 className="text-lg">
            La mode est éphémère,<br />le beau est éternel.
          </h4>
        </div>
        <HamburgerMenu open={hamburgerOpened} toggleOpen={toggleOpen} />
      </section>
      <NavigationMenu open={hamburgerOpened} toggleOpen={toggleOpen}/>
    </>
  )
}

export default Intro
