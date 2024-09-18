import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

function Project() {
  return (
    <div className='border-b flex flex-col mx-auto justify-center items-center border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>
        Project
      </motion.h1>
      
      <div>
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className='mb-8 flex flex-col lg:flex-row gap-8 lg:justify-center'
          >
            
            <motion.div
              whileInView={{ opacity: 1, z: 0, scale: 1 }} 
              initial={{ opacity: 0, z: 1, scale: 0.5 }}  
              transition={{ duration: 1.5 }}
              className='w-full lg:w-2/4 flex justify-start lg:justify-center'
            >
              <motion.img
                className='mb-6 rounded border-2 border-purple-300' 
                src={project.image} 
                width={150} 
                alt={project.title} 
              />
            </motion.div>

            {/* Project Details Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-2/4'
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              
              {/* Technologies List */}
              <div className='flex flex-wrap'>
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
