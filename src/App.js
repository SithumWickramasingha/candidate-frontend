import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import JobDetailsBar from './components/JobDetailsBar/JobDetailsBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <JobDetailsBar/>
      </header>
    </div>
  );
}

export default App;
