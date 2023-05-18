import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Game, Settings } from './containers';
import './App.css';

function App() {
 return(
  <BrowserRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route  path="/" element={<Home/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
  </BrowserRouter>
);
 }
export default App;