import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  inital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",

    }
  }

})

function Technologies() {
  return (
    <div className=" border-b py-10 border-neutral-800 pd-24  " >
      <motion.h1
      whileInView={{opacity:1,y:0}} 
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className=" my-20 text-center text-4xl ">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className=" flex flex-wrap items-center justify-center gap-4 " >
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaHtml5 className=" text-4xl text-orange-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaCss3 className=" text-4xl text-blue-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaNodeJs className=" text-4xl text-green-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 ">
          <RiReactjsLine className=" text-4xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <TbBrandNextjs className=" text-4xl text-white-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4 ">
          <SiExpress className=" text-4xl text-white-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className=" rounded-full bg-green-950 border-4 border-neutral-800 p-4 ">
          <SiMongodb className=" text-4xl text-green-400  " />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies