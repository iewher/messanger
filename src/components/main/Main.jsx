import React from 'react';
import './style/main-style.css';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

export const Main = () => {
    return (
        <div className="main">
            <div className="main-container">
                <Header />
                <div className="main-content">
                    main content
                </div>
                <Footer />  
            </div>
        </div>
    )
}