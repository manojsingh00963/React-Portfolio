import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";

import { delay, motion } from "framer-motion"


const container = (delay)=>({
    hidden: {x: -100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})


function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-10 mb-20 lg:mb-35">
            <div className="flex justify-center flex-wrap gap-10 mx-auto">
                <div className=" w-auto lg:w-1/2">
                    <div className="flex flex-col text-start lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                             className="pb-16 text-6xl text-center font-thin tracking-tight lg:mt-16 lg:text-6xl">
                            Kevin Rush
                        </motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                         className="bg-gradient-to-r from-pink-300 via-sky-300 to-purple-500
              bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-4 max-w-xl  py-6 font-light tracking-tight  lg:text-justify ">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className=" w-1/2 lg:w-2/5 lg:p-9">
                    <div className="flex justify-center">
                        <motion.img initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:1.2}}
                         src={profilePic} alt="Profile pic" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
