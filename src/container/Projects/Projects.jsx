import React, { useState, useEffect } from 'react';
import { AiOutlineZoomIn } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const query = '*[_type == "projects"]';
        client.fetch(query).then(data => {
            setProjects(data);
        })
    }, [])
    
    return (
        <>
            <h2 className='head-text'>Here are some of my <span>projects</span></h2>
            <div className='app__projects-portfolio'>
                {projects.map((project, index) => (
                    <div className='app__projects-item app__flex' key={index}>
                        <div className='app__projects-img app__flex'>
                            <img src={urlFor(project.imgUrl)} alt={project.name} />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.35, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className='app__projects-hover app__flex'
                            >
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.9] }}
                                    transition={{ duration: 0.35 }}
                                    className='app__flex'
                                >
                                    <AiOutlineZoomIn />
                                </motion.div>                              
                            </motion.div>
                        </div>
                        <div className='app__projects-content app__flex'>
                            <h3 className='bold-text'>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AppWrap(MotionWrap(Projects, 'app__projects'), 'projects', 'app__lightbg');