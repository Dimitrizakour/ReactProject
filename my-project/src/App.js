import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  
  const[blur,setblur]= useState('blur');

  
  const toogleHandler =()=>{

      if(blur==='blur')
      {
        setblur('blur-none');
      }
      else{
        setblur('blur');
      }

  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={'text-4xl mb-10 '+blur} >
         Surpirse ;)
        </p>
        <button className='bg-blue-500 px-5 rounded-3xl mb-10' onClick={toogleHandler}>CLICK ME</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
