import React from 'react';
import './style/left-bar-style.css'

import { Header } from '../header/Header';
import { Search } from '../search/Search';
import  GET_API   from '../GET_API/GET_API';

export const LeftBar = () => {
    return (
        <div className="left-bar">
            <Header />
            <Search />
            <div className="left-bar-content">
                Создайте чат, и он будет отображаться
            </div>
        </div>
    )
}