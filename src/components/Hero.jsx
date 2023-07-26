import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs"

const Hero = () => {
  const instagram = "https://instagram.com/__.__ki_r_an__.__?igshid=MzNlNGNkZWQ4Mg=="
  const linkedin = "https://www.linkedin.com/in/kiran-r-b60960208"
  const github = "https://github.com/KiranR1605"

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 sm:top-[90px] top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className={`flex flex-col sm:mr-5 mt-10 gap-10 z-50`}>
          <div onClick={() => window.open(linkedin, "_blank")}
            className='flex justify-center items-center cursor-pointer'>
            <BsLinkedin className='text-[20px] sm:text-[30px]' />
          </div>
          <div onClick={() => window.open(github, "_blank")}
            className='flex justify-center items-center cursor-pointer'>
            <BsGithub className='text-[20px] sm:text-[30px]' />
          </div>
          <div onClick={() => window.open(instagram, "_blank")}
            className='flex justify-center items-center cursor-pointer'>
            <BsInstagram className='text-[20px] sm:text-[30px]' />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-[30px] sm:mt-0`}>
            Hi, I'm <span className='text-[#915EFF]'>Kiran R</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Python Developer and <br className='sm:block hidden' />
            Full Stack Web Developer.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero