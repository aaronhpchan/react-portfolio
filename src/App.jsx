import React from 'react'; 
import { About, Footer, Header, Projects, Skills } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;