import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <div className="flex flex-col items-baseline">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
          EPHEMERE
        </h1>
        <h4 className="text-lg text-center">
          La mode est éphémère, le beau est éternel.
        </h4>
      </div>
      <Link href="/About">A propos</Link>
    </section>
  )
}

export default Intro
