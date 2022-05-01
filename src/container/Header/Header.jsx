import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const Header = () => {
    return (
        <div className='app__header app__flex'>
            <motion.div
                whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
                className='app__header-name'
            >
                <h1>Hi, I am Aaron &#128075;</h1>
            </motion.div>
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.75 }}
                className='app__header-info'
            >
                <p>A web developer based in Toronto</p>
            </motion.div>
        </div>
    );
}

export default AppWrap(Header, 'home');