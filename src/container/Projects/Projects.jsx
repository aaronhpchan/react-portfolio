import React, { useState, useEffect } from 'react';
import { AiOutlineZoomIn } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Modal from './Modal';
import './Projects.scss';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [opened, setOpened] = useState(false);
    const [modalData, setModalData] = useState({ title: '', description: '', imgUrl: '', projectLink: '', codeLink: '', tags: [] });
    const { title, description, imgUrl, projectLink, codeLink, tags } = modalData;
    
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
                    <div 
                        className='app__projects-item app__flex' 
                        key={index} 
                        onClick={() => {
                            setOpened(true);
                            setModalData(project);
                            }
                        }
                    >
                        <div className='app__projects-img app__flex'>
                            <img src={urlFor(project.imgUrl)} alt={project.title} />
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

            <Modal open={opened} onClose={() => setOpened(false)}>               
                <h3 className='bold-text' style={{ textAlign: 'center', textDecoration: 'uppercase', fontSize: 'min(2rem, 8.5vw)' }}>{title}</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={urlFor(imgUrl)} alt={title} style={{ width: '90%', borderRadius: '0.5rem', margin: '1rem 0' }} />
                </div>
                <div style={{ width:'90%', display: 'flex', flexDirection: 'column', justifyContent:'center', paddingTop: '0.5rem' }}>
                    <h4 style={{ fontWeight: 800, fontSize: 'x-large' }}>Project Overview</h4>
                    <p style={{ margin: '0.75rem 0', fontSize: 'medium' }}>{description}</p>
                    <h4 style={{ fontWeight: 800, fontSize: 'x-large' }}>Tools Used</h4>
                    <div style={{ margin: '0.75rem 0 0.5rem' }}>
                        {tags.map((tag, index) => (
                            <span key={index} style={{ display: 'inline-block', margin: '0 1rem 0.5rem 0', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', backgroundColor: 'var(--light-gray-color)', color: 'var(--black-color)', fontSize: 'medium' }}>{tag}</span>
                        ))}
                    </div>   
                </div>
                <div>
                    <a href={projectLink} target='_blank'><motion.button whileHover={{ scale: 1.075 }} type='button'>Visit Site</motion.button></a>
                    <a href={codeLink} target='_blank'><motion.button whileHover={{ scale: 1.075 }} type='button'>View Code</motion.button></a>
                </div>
            </Modal>
        </>
    );
}

export default AppWrap(MotionWrap(Projects, 'app__projects'), 'projects', 'app__lightbg');