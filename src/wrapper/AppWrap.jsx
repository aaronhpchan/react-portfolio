import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className='app__wrapper app__flex'>
                <Component />
                <div className='copyright'>
                    <div className='app__social-mobile'>
                        <a href='https://www.linkedin.com/in/aaronchan-webdev' target='_blank'><BsLinkedin /></a>
                        <a href='https://github.com/aaronhpchan' target='_blank'><BsGithub /></a>
                    </div>                 
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    );
};

export default AppWrap;