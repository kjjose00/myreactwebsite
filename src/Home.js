import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import './Header.css';
import Howitworks from './Howitworks';
import Howtouse from './Howtouse';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    return (
        <>
        <Navbar/>
        <Header/>
        <Howitworks/>
        <Howtouse/>
        <Services/>
        <Contact/>
        <Footer/>
                
        </>
    )
}

export default Home
