import React from "react"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"
import { motion } from "framer-motion"

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I know</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      <div className='w-full flex mb-7'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I possess a diverse set of skills and experience that I've gained through
        real-world examples of my work. I excel in the following technologies
        and am confident in my ability to solve complex problems, work with different
        frameworks, and continuously learn and improve my skills.
        </motion.p>
      </div>

      <div className='hidden md:block' >
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      <div className='block md:hidden' >
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <img src={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills")