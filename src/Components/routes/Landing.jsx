import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
    
  } from "react-router-dom";
import Header from '../Header/Header';
import Body from '../Body';
import Footer from '../Footer';
import Contacts from '../contact'; 
import AboutUs from '../aboutUs'; 

const Landing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<><Header/> <Body/> <Footer/></>}/>
            </Routes>
        </Router>
    );
};

export default Landing;
