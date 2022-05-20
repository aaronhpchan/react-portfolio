import React from 'react';
import ReactDom from 'react-dom';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const overlayStyle = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
};
const modalStyle = {
    width: 'min(670px, 75%)',
    maxHeight: 'min(100%, 99vh)',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    padding: '1rem',
    zIndex: '1000',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--white-color)',
    fontFamily: 'var(--font-base)',
    borderRadius: '0.175rem'
};
const hiXStyle = {
    position: 'absolute',
    top: 'clamp(1vh, 1.85%, 1rem)',
    right: 'clamp(1vw, 2.5%, 1rem)',
    width: 'min(5%, 35px)',
    height: 'min(5%, 35px)',
    color: 'var(--secondary-color)',
    cursor: 'pointer'
};

export default function Modal({ open, children, onClose }) {
    if(!open) return null
    return ReactDom.createPortal(
        <>
            <motion.div 
                style={overlayStyle} 
                onClick={onClose} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} 
            />
            <div style={modalStyle} onClick={e => e.stopPropagation()}>              
                {children}
                <HiX onClick={onClose} style={hiXStyle} />                             
            </div>            
        </>,
        document.getElementById('portal')
    );
};