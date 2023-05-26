import React from 'react';
import './style/header-style.css';
import {AiOutlineUser} from 'react-icons/ai'

export const Header = () => {
    return (
        <div className="header">
            <button className='header-user'><AiOutlineUser /></button>
        </div>
    )
}