import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
    
  } from "react-router-dom";
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Contacts from '../Contact/contact'; 
import AboutUs from '../Aboutus/aboutUs'; 

const Landing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/home' element={<><Header/> <Body/> <Footer/></>}/>
            </Routes>
        </Router>
    );
};

export default Landing;
