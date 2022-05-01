import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                <a 
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#5555ff'} : {}}
                />
            ))}
        </div>
    )
};

export default NavigationDots;