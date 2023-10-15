import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/bicon.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['B','u','i','l','d', ' ','P','a','t','c','h','e','s',' ','o','f',' ','c','o','d','e']
  // const jobArray = [
  //   'w',
  //   'e',
  //   'b',
  //   ' ',
  //   'd',
  //   'e',
  //   'v',
  //   'e',
  //   'l',
  //   'o',
  //   'p',
  //   'e',
  //   'r',
  //   '.',
  // ]

  useEffect(() => {
    setTimeout(() => {
    setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>G</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>o</span>
            <span className={`${letterClass} _14`}>d</span>
            <span className={`${letterClass} _15`}> </span>
            <span className={`${letterClass} _16`}>d</span>
            <span className={`${letterClass} _17`}>a</span>
            <span className={`${letterClass} _18`}>y</span>
            <span className={`${letterClass} _19`}>,</span>
            <br />
            <span className={`${letterClass} _12`}>W</span>
            <span className={`${letterClass} _13`}>e</span>
            <span className={`${letterClass} _14`}> </span>
           
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            {/* <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /> */}
          </h1>
          <h2>Website Development / App Development</h2>
          <Link to="/contact" className="flat-button">
            CONTACT US 
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
