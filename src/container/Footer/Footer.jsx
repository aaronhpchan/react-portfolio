import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FooterWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { name, email, message } = formData;

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = () => {
        setLoading(true);
        
        const contact = {
            //follow Sanity guideline
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        //use Sanity client to upload the information to Sanity
        client.create(contact).then(() => {
            setLoading(false);
            setSubmitted(true);
        })
    }
    
    return (
        <>
            <h2 className='head-text'>Feel Free to <span>Contact</span> Me</h2>
            {!submitted ?
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input className='p-text' type='text' placeholder='Enter Your Name' name='name' value={name} onChange={handleChangeInput} />
                    </div>
                    <div className='app__flex'>
                        <input className='p-text' type='email' placeholder='Enter Your Email' name='email' value={email} onChange={handleChangeInput} />
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder='Enter Your Message'
                            value={message}
                            name='message'
                            onChange={handleChangeInput}
                        />
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type='button' 
                        className='p-text' 
                        onClick={handleSubmit}
                    >
                        {loading ? 'Sending' : 'Send Message'}
                    </motion.button>
                </div>
                : <div>
                    <h3 className='head-text'>Thanks for getting in touch!</h3>
                </div>
            }
        </>
    );
}

export default FooterWrap(MotionWrap(Footer, 'app__footer'), 'contact');