import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import JobDetailsBar from './components/JobDetailsBar/JobDetailsBar';
import SideBar from './components/SideBar/SideBar';
import JobInfoBar from './components/JobInfoBar/JobInforBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <JobDetailsBar/>
        <JobInfoBar/>
        <SideBar/>
        
      </header>
    </div>
  );
}

export default App;
