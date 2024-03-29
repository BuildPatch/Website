import { useEffect, useState } from 'react'
import {
  faCode,
  faServer,
  faGlobe,
  faNetworkWired,
  faRobot,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'u', 's']}
              idx={15}
            />
          </h1>
          <p>
            Welcome to our company, your go-to destination for comprehensive IT
            solutions tailored to fit your budget. We take pride in offering
            all-in-one IT services that meet your unique requirements. Our
            commitment to excellence means we never compromise on quality or
            creativity.
          </p>
          <p align="LEFT">
            With us, you can expect innovative solutions that align with your
            needs, ensuring your projects are not only cost-effective but also
            of the highest standard.
          </p>
          <p>
            Join us and experience the perfect blend of affordability, quality,
            and creativity in every IT solution we provide.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faServer} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGlobe} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNetworkWired} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faRobot} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faMicrochip} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default About
