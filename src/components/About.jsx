import React from 'react';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

function About() {
    return (
        <div className="border-b border-neutral-900 pb-10">
            <h1 className="my-20 text-center text-4xl">
                About<span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-col justify-center lg:flex-row flex-wrap gap-10">
                {/* Motion div for the image */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img
                            className="rounded-2xl w-[300px] lg:w-[400px]"
                            src={aboutImg}
                            alt="about"
                        />
                    </div>
                </motion.div>

                {/* Motion div for the text */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="flex lg:w-2/2"
                >
                    <div className="flex justify-center text-justify">
                        <p className="my-2 max-w-xl p-10 py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
