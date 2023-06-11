import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="border-t bg-neutral-50 border-neutral-200">
      <Container>
        <div className="flex flex-col items-center justify-between py-28 lg:flex-row">
          <div>
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              EPHEMERE
            </h3>
            <p>Ephémère magazine, Paris IV</p>

          </div>
          <div>
            <a href="https://instagram.com/ephemeremagazine2023">Instagram</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
