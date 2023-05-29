import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './style/login-style.css';

export const Login = () => {
  const [ApiTokenInstance, setApiTokenInstance] = useState('');
  const [IdInstance, setIdInstance] = useState('');
  const navigate = useNavigate();

  const handleApiTokenInstanceIdChange = (event) => {
    setApiTokenInstance(event.target.value);
  };

  const handleIdInstanceChange = (event) => {
    setIdInstance(event.target.value);
  };


  const handleSave = () => {
    localStorage.setItem('ApiTokenInstance', ApiTokenInstance);
    localStorage.setItem('IdInstance', IdInstance);
    navigate('/chat');
  }

  return (
    <div className='login-container'>
        <div className='login-inputs'>
            <label htmlFor="token-id-input">ApiTokenInstance:</label>
            <input
                id="token-id-input"
                type="text"
                value={ApiTokenInstance}
                onChange={handleApiTokenInstanceIdChange}
            />

            <label htmlFor="id-intence-input">IdInstance:</label>
            <input
                id="id-intence-input"
                type="text"
                value={IdInstance}
                onChange={handleIdInstanceChange}
            />
            <button className='login-button' onClick={handleSave}>Войти</button>
        </div>
    </div>
  );
};