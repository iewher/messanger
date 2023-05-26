import React from 'react';
import './style/main-style.css';

import { LeftBar } from '../left-bar/Left-bar';

export const Main = () => {
    return (
        <div className="main">
            <div className="main-container">
                <LeftBar />
                <div className="main-content">
                    <div className='main-image-preload'>
                        <img src='https://cdn-icons-png.flaticon.com/512/17/17470.png?w=360'/>
                    </div>
                    <div className="main-text-preload">
                        <p>Отправляйте или получайте сообщение</p>
                    </div>
                </div>
            </div>
        </div>
    )
}