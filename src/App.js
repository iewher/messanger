import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import { Login } from './components/login-page/Login';
import { Main } from './components/main/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/chat' element={<Main />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;