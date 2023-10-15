import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
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
              strArray={['P', 'o', 'r', 't', 'f', ' o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          {/* <p>
          Welcome to our company, your go-to destination for comprehensive IT 
          solutions tailored to fit your budget. We take pride in offering all-in-one 
          IT services that meet your unique requirements. Our commitment to excellence 
          means we never compromise on quality or creativity. 
          </p>
          <p align="LEFT">
          With us, you can expect 
          innovative solutions that align with your needs, ensuring your projects are
           not only cost-effective but also of the highest standard. 
          </p>
          <p>
          Join us and 
           experience the perfect blend of affordability, quality, and creativity in every IT solution we provide.
          </p> */}
        </div>

        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio